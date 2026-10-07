"""Generate a one-column, text-based A4 CV from the editable JSON source.

Requires reportlab and pypdf. Reads only this portfolio's data/cv.json.
"""
import json
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / "data/cv.json").read_text(encoding="utf-8"))
out = ROOT / "public/cv/Rafael_Sani_Valentino_Prahastra_CV.pdf"
out.parent.mkdir(parents=True, exist_ok=True)
styles = {
    "name": ParagraphStyle("Name", fontName="Helvetica-Bold", fontSize=17.5, leading=22, spaceAfter=4),
    "headline": ParagraphStyle("Headline", fontName="Helvetica", fontSize=10, leading=14, spaceAfter=4),
    "contact": ParagraphStyle("Contact", fontName="Helvetica", fontSize=8.5, leading=12, spaceAfter=10),
    "section": ParagraphStyle("Section", fontName="Helvetica-Bold", fontSize=10, leading=13, spaceBefore=11, spaceAfter=5, keepWithNext=True),
    "body": ParagraphStyle("Body", fontName="Helvetica", fontSize=9.3, leading=12.8, spaceAfter=4, alignment=TA_LEFT),
    "title": ParagraphStyle("Title", fontName="Helvetica-Bold", fontSize=9.7, leading=13, spaceAfter=2, keepWithNext=True),
    "role": ParagraphStyle("Role", fontName="Helvetica", fontSize=8.8, leading=12, spaceAfter=4, keepWithNext=True),
    "bullet": ParagraphStyle("Bullet", fontName="Helvetica", fontSize=9.3, leading=12.8, spaceAfter=3, leftIndent=10, firstLineIndent=-8),
}
story = []
plain = []
def add(text, style="body", raw=False):
    story.append(Paragraph(text if raw else escape(text), styles[style]))
    plain.append(text)

add(data["name"], "name")
add(data["headline"], "headline")
add(f'<a href="mailto:{escape(data["email"])}">{escape(data["email"])}</a><br/><a href="{escape(data["portfolio"])}">{escape(data["portfolio"])}</a>', "contact", raw=True)
add("PROFESSIONAL SUMMARY", "section")
add(data["summary"])
add("EDUCATION", "section")
add(data["education"]["institution"], "title")
add(data["education"]["program"])
add("Relevant coursework: " + data["education"]["coursework"])
add("TECHNICAL SKILLS", "section")
for s in data["skills"]:
    add(f'<b>{escape(s["category"])}:</b> {escape(s["items"])}', raw=True)
add("PROJECTS", "section")
for project in data["projects"]:
    add(project["title"], "title")
    add(project["role"], "role")
    for bullet in project["bullets"]:
        add("- " + bullet, "bullet")
    story.append(Spacer(1, 4))
add("CURRENTLY LEARNING", "section")
add(data["learning"])
doc = SimpleDocTemplate(str(out), pagesize=A4, rightMargin=42, leftMargin=42,
                       topMargin=34, bottomMargin=34, title=data["name"]+" - CV",
                       author=data["name"], subject="Backend and cloud internship CV")
doc.build(story)
reader = PdfReader(out)
assert len(reader.pages) == 1, "CV must fit on one A4 page; shorten content before publishing"
text = "\n".join(page.extract_text() or "" for page in reader.pages)
for required in [data["name"], data["email"], "PROFESSIONAL SUMMARY", "EDUCATION", "TECHNICAL SKILLS", "PROJECTS", "SQLite", "SimbaBlox", "CURRENTLY LEARNING"]:
    assert required in text, f"Missing extractable text: {required}"
assert abs(float(reader.pages[0].mediabox.width) - A4[0]) < 1
assert abs(float(reader.pages[0].mediabox.height) - A4[1]) < 1
(ROOT / "public/cv/Rafael_Sani_Valentino_Prahastra_CV.txt").write_text(text, encoding="utf-8")
print(f"CV verified: 1 A4 page, {len(text)} extractable characters, {out.stat().st_size} bytes")


import xml.etree.ElementTree as ET
import sys

try:
    tree = ET.parse('d:/vignesh/files/Personal/HIKAT/hikity/web_animated/hikity/public/sitemap.xml')
    root = tree.getroot()
    print("Sitemap is valid XML.")
    print(f"Root tag: {root.tag}")
    
    # Check namespaces
    namespaces = dict([node for _, node in ET.iterparse('d:/vignesh/files/Personal/HIKAT/hikity/web_animated/hikity/public/sitemap.xml', events=['start-ns'])])
    print(f"Namespaces: {namespaces}")
    
except ET.ParseError as e:
    print(f"XML Parse Error: {e}")
    sys.exit(1)
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)

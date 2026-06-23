#!/bin/bash
# Run this script once from the project root to save the mockup images locally.
# These URLs are temporary (~7 days). Re-run if they expire.
#
# Usage:
#   bash download-mockups.sh

set -e
mkdir -p public/images/works

echo "Downloading project mockup images..."

curl -sL "https://www.figma.com/api/mcp/asset/9041fff6-0d2e-431d-b610-ae60050cdf9e" \
  -o "public/images/works/proj-1.png" && echo "✓ proj-1.png (Catálogo de Produtos)"

curl -sL "https://www.figma.com/api/mcp/asset/524a3ef7-ccf4-4f92-b415-f48fdf5fb80d" \
  -o "public/images/works/proj-2.png" && echo "✓ proj-2.png (Emissor de Notas Fiscais)"

curl -sL "https://www.figma.com/api/mcp/asset/4046ed2c-05fc-4223-8b69-4cb1b0e25ef1" \
  -o "public/images/works/proj-3.png" && echo "✓ proj-3.png (Frente de Caixa)"

echo ""
echo "Done! Images saved to public/images/works/"

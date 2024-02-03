import svgwrite

def create_svg_card(card_name):
    # Create an SVG drawing
    dwg = svgwrite.Drawing(f"{card_name}.svg", profile='tiny')

    # Save the SVG file
    dwg.save()

# Define ranks and suits
ranks = ['A', 'K', 'Q', 'J'] + [str(i) for i in range(10, 1, -1)]
suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']

# Create SVG files for each card
for rank in ranks:
    for suit in suits:
        card_name = f"{rank}_{suit}"
        print(card_name)
        create_svg_card(card_name)

# Create SVG files for Jokers
create_svg_card('Joker_1')
create_svg_card('Joker_2')


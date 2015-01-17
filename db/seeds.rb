# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Admin.create({email: "co-op@252e57.com", password: "yY79922ZDV", password_confirmation: "yY79922ZDV"})
Admin.create({email: "softgravity@252e57.com", password: "vM6385HC3V", password_confirmation: "vM6385HC3V"})
Admin.create({email: "info@252e57.com", password: "5reSTaWuYa", password_confirmation: "5reSTaWuYa"})
Admin.create({email: "shelton@252e57.com", password: "6a5R9uVpYa", password_confirmation: "6a5R9uVpYa"})
Admin.create({email: "marla@252e57.com", password: "w930kQlrx85", password_confirmation: "w930kQlrx85"})
Admin.create({email: "andrea@252e57.com", password: "l4WjPQvsrxs2", password_confirmation: "l4WjPQvsrxs2"})

Broker.create({email: "pamela@252e57.com", password: "ba2uzaYuWA", password_confirmation: "ba2uzaYuWA"})
Broker.create({email: "patricia@252e57.com", password: "J2yeQaQebe", password_confirmation: "J2yeQaQebe"})
Broker.create({email: "elizabeth@252e57.com", password: "tHedRed2Eb", password_confirmation: "tHedRed2Eb"})
Broker.create({email: "gregory@252e57.com", password: "6rUgaChayU", password_confirmation: "6rUgaChayU"})
Broker.create({email: "steve@252e57.com", password: "Sp2teqAsWA", password_confirmation: "Sp2teqAsWA"})
Broker.create({email: "meg@252e57.com", password: "huphuFre4A", password_confirmation: "huphuFre4A"})
Broker.create({email: "marlee@252e57.com", password: "5A8KQFRe5W", password_confirmation: "5A8KQFRe5W"})


# Actual video sections are design elements
VideoSection.create({section: "Design Architects", title: "Skidmore, Owings & Merrill", body: "<p>A leading international architecture, urban design and planning, engineering, and interior architecture firm, Skidmore Owings & Merrill LLP (SOM) is recognized for excellence and innovation that enhance the quality of the built environment. The firm’s long-established history of globally recognized icons such the Burj Khalifa in Dubai, as well as transformative New York City projects such as Lever House, the new One World Trade Center and Time Warner Center, underscore its reputation for exceptional design and creativity.  By analyzing clients’ goals and synthesizing design and technical coordination, the firm creates spaces that are cutting-edge, distinctive, and functional.</p><p>SOM was twice named AIA Firm of the Year and its projects have won over 1,700 awards, including five AIA 25-year Awards.</p>"})
VideoSection.create({section: "Interior Architects", title: "Daniel Romualdez", body: "<p>Architect and designer Daniel Romualdez is globally renowned within an elite group of tastemakers and business leaders for the creation of exquisitely sophisticated interiors. After coming to the United States to study at Yale and Columbia University, Romualdez worked for architectural luminaries Thierry Despont and Robert A.M. Stern before establishing his own eponymous firm in Manhattan in 1993. Called “a connoisseur with tremendous range” by architecture critic Paul Goldberger of The New Yorker, Romualdez is known for interior design that deftly juxtaposes humble and fine materials, elegantly integrating classical style with modern influences. Named to Architectural Digest’s prestigious AD100 list, Romualdez has also been profiled by leading international publications including Vogue, The Wall Street Journal, and Departures.</p>"})
VideoSection.create({section: "Architects of Record", title: "SLCE", body: "<p>Founded in New York City in 1941, SLCE Architects, LLP is one of the most prolific firms in the metropolitan area and enjoys a growing presence nationally. As Architect of Record, SLCE has collaborated with many internationally renowned design including Atelier Jean Nouvel, Norman Foster & Partners, Robert A.M. Stern Architects, Renzo Piano Workshop, Herzog de Meuron Architects, Skidmore Owings & Merrill, and Santiago Calatrava Arquitecto. SLCE’s New York City luxury condominium projects include 15 Central Park West, Beacon Court, 10 UN Plaza, 255 East 74th Street and The Milan.</p>"})
VideoSection.create({section: "Sustainable Engineers", title: "WSP Flacks + Kurtz", body: "<p>Founded in 1969, WSP Flack + Kurtz is the mechanical engineering business of WSP, one of the world’s leading engineering and design consultancies with more than 300 offices, across 30 countries. The firm provides sustainable consulting in the built and natural environment across a wide range of market sectors, including residential, retail, hotels and resorts, and cultural institutions, among many others. WSP Flack + Kurtz, which specializes in the residential sector, offers multi-disciplinary expertise in all areas of planning, from design and construction to building engineering and environmental consultancy for large and complex projects. High-profile properties the firm has consulted for in New York City include New York by Gehry, The Plaza Hotel & Residences, Time Warner Center, Trump Tower, Trump International Hotel & Tower, MoMA Tower, and 15 Central Park West.</p>"})

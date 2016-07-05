require 'rubygems'
require 'nokogiri'
require 'open-uri'
require 'json'

######## STEPS ########
# 1) Initialize a web page with a link as an argument
  # 1.1) 
# 2) Create a feature where additional web pages can be added

class WebPage
  def initialize(webpage = '')
    @webpage = webpage
    doc_file = Nokogiri::HTML(open(@webpage)) # creates an html document of web page
    @quotes_array = parse_quotes(doc_file) # Parses an HTML document and saves it to @quotes array
  end

  def add_page(webpage)
    doc_file = Nokogiri::HTML(open(webpage)) # creates an html document of web page
    append_and_parse_quotes(@quotes_array, doc_file) # Appends quotes to @quotes_array
  end

  # Writes to file
  def write_to_file
    generated_json = generate_json(@quotes_array)
    File.open("quotes/quotes.json", "a") do |f|
      f << generated_json
    end
  end  

  private

  # Appends quotes to web page
  def append_and_parse_quotes(quotes_array, doc_file)
    parsed_array = doc_file.css("span").select{ |span| span['class'] == "bqQuoteLink" }.map{ |quote_html| quote_html.text }
    quotes_array.push(parsed_array).flatten!
  end

  def parse_quotes(doc_file)
    doc_file.css("span").select{ |span| span['class'] == "bqQuoteLink" }.map{ |quote_html| quote_html.text }
  end

  def generate_json(quotes)
    JSON.generate(quotes)
  end
end

webpage = WebPage.new("http://www.brainyquote.com/quotes/authors/k/kanye_west.html")
webpage.add_page("http://www.brainyquote.com/quotes/authors/k/kanye_west_2.html")
webpage.write_to_file
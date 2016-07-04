require 'rubygems'
require 'nokogiri'
require 'open-uri'

class WebPage
  def initialize(webpage = '')
    @webpage = webpage
    @doc_file = Nokogiri::HTML(open(@webpage))
    @quotes_array = parse_quotes(@doc_file)
  end

  private

  def parse_quotes(doc_file)
    puts doc_file.css("span").select {|span| span['class'] == "bqQuoteLink"}
  end
end

WebPage.new("http://www.brainyquote.com/quotes/authors/k/kanye_west.html")
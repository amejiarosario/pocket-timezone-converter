require 'sinatra'

get '/tz/:file' do
  t = File.read("public/tz/#{params[:file]}")
  t.gsub!(/^#.*\n/, '')
  t.gsub!(/^\n/, '')
  t
end

get '/' do
   #redirect '/index.html'
   File.new('public/index.html').readlines
end

class Service

	def login
		# login to betfair
		require 'betfair'
		# # create a client with app code
		client = Betfair::Client.new("X-Application" => "QclZiGscuNBIPhCB")
		# # let's log in.
		client.interactive_login("lucena1", "bubbatoto2")
	end

		# end loginstuff
		#---------------





							# #get market catalog for presidentual election
							# # pres_cat = client.list_market_catalogue(filter: {"marketIds": ["1.107373419"]},
							# #  	"marketProjection":["RUNNER_METADATA"],
							# #  	maxResults: 200,)

							# # get candidate runners list form catalog
							#  # candList = pres_cat[0]["runners"]

							# #get market book for presidentual election
							# pres_book = client.list_market_book("marketIds": ["1.107373419"])

							# #Democratic Nominee
							# dem_book = client.list_market_book("marketIds": ["1.107664930"])

							# #Republican Nominee
							# rep_book = client.list_market_book("marketIds": ["1.107664938"])


							# #add dem and rep books to get a big list of all primary odds
							# big_book = dem_book[0]["runners"] + rep_book[0]["runners"]


							# # get top 8 selections form maket book and match them with name form market catalog, make an array of name-price pairs
							# topten = []
							# for index in 0 ... 20
							# 	e = []
							# 	sid = pres_book[0]["runners"][index]["selectionId"]
							# 	p "selectionid:"
							# 	p sid
							# 	s = candList.select {|selection| selection["selectionId"] == sid }
							# 	name = s[0]["runnerName"]
							# 	pri = big_book.select {|selection| selection["selectionId"] == sid }
							# 	p "pri"
							# 	p pri
							# 	priodds = pri[0]["lastPriceTraded"]
							# 	e.push(name)
							# 	e.push(pres_book[0]["runners"][index]["lastPriceTraded"])
							# 	e.push(priodds)
							# 	e.push(sid)
							# 	topten.push(e)
							# end


							# for index in 0 ... topten.length
							# 	candidate = Candidate.new({name: topten[index][0], presidency_odds: topten[index][1], primary_odds: topten[index][2]})
							# 	candidate.save
							# end


							# #get market book for a market

							# #get market catalog for a market
							# new_cat = client.list_market_catalogue(filter: {"marketIds": ["1.107373419"]},
							#  	"marketProjection":["RUNNER_METADATA"],
							#  	maxResults: 200,)



							# return topten
	

	def self.list
		# login to betfair
		require 'betfair'
		# # create a client with app code
		client = Betfair::Client.new("X-Application" => "QclZiGscuNBIPhCB")
		# # let's log in.
		client.interactive_login("lucena1", "bubbatoto2")
		
			party_book = client.list_market_book("marketIds": ["1.116006120"])

			p party_book

			partyrunners = party_book[0]["runners"]

			p "partyrunners"
			p partyrunners




		Party.all.each do |party|
			p party.name
			p party.odds
			partycode = party.betfaircode
			selection = partyrunners.select {|selection| selection["selectionId"] == partycode.to_i }
			party.odds = selection[0]["lastPriceTraded"]
			party.save

		end

		s = partyrunners.select {|selection| selection["selectionId"] == 1171581 }
		p "s ***************"
		p s
		
	end

end
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Candidate.destroy_all
Party.destroy_all


party1 = Party.create(name: "A", odds: 1.5)
party2 = Party.create(name: "B", odds: 1.6)

candi1 = Candidate.create(name: "C1", party_id: party1.id, presidencyodds: 1.1, primaryodds: 1.2)
candi2 = Candidate.create(name: "C2", party_id: party2.id, presidencyodds: 2.1, primaryodds: 2.2)
candi3 = Candidate.create(name: "C3", party_id: party1.id, presidencyodds: 3.1, primaryodds: 3.2)

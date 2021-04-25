export default `type Vehical {
    name: String!,
	 type: String!,
	 brand: String!,
	 year: Int!,
	 vehical_no: String!,
	 client_id: String!,
	 slots: [String],
  }
  type Query {
	  vehical(name: String!): Vehical
	  vehicals: [Vehical]
  }
  type Mutation {

	  editVehical(
		  	name:String!,
			type: String!,
			brand:String!,
			year:Int!,
			vehical_no:String!,
			client_id:String!,
			slots: [String]): Vehical
			addVehical(name:String!,
			type: String!,
			brand:String!,
			year:Int!,
			vehical_no:String!,
			client_id:String!,
			slots: [String]
		): Vehical

		deleteVehical(
			name:String!,
			type: String!,
			brand:String!,
			year:Int!,
			vehical_no:String!,
			client_id:String!,
			slots: [String]
			) : Vehical

  }`;

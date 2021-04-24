export default `
  type Vehical {
    name: String!,
	 type: String!,
	 brand: String!,
	 year: Number!,
	 vehical_no: String!,
	 client_id: String!,
	 slots: [Slot]
  }
  type Query {
	  vehical(name: String!): Vehical
	  vehicals: [Vehical]
  }
  type Mutation {

	addVehical(name:String!, type: String!, brand:String!, year:Number!, vehical_no:String!, client_id:String!, slots:[Slot]): Vehical
	editVehical(name:String!, type: String!, brand:String!, year:Number!, vehical_no:String!, client_id:String!, slots:[Slot]): Vehical
	deleteVehical(name:String!, type: String!, brand:String!, year:Number!, vehical_no:String!) : Vehical

  }
`;

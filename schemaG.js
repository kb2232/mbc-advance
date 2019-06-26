const graphql = require('graphql');
const mongoose = require('mongoose');
require('./models/Mem_leaders');
require('./models/Members');
const MBC_MemberX = mongoose.model('menbychoice');
const MBC_LeaderX = mongoose.model('mbc_leaders');

const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLInt, 
  GraphQLSchema, 
  GraphQLList, 
  GraphQLNonNull } = graphql;

const MBC_MemberType = new GraphQLObjectType(
  {
    name:'menbychoice',
    fields:()=>({
      firstname:{type:GraphQLString},
      cellphone:{type:GraphQLString}
    })
});

const MBC_leaders = new GraphQLObjectType({
  name:'mbc_leaders',
  fields:()=>({
    firstname:{type:GraphQLString},
    lastname:{type:GraphQLString},
    cellphone:{type:GraphQLString}
  })
});

const mutation = new GraphQLObjectType({
  name:'Mutation',
  fields:{
    add_MBC_Member:
    {
      type:MBC_MemberType,
      args:{
        firstname:{type: new GraphQLNonNull(GraphQLString)},
        cellphone:{type: new GraphQLNonNull(GraphQLString)}
      },
      resolve:async(parent,args)=>{
        const res = new MBC_MemberX(args).save();
        return res;
      }
    },
    add_MBC_Leader:
    {
      type:MBC_leaders,
      args:{
        firstname:{type: new GraphQLNonNull(GraphQLString)},
        lastname:{type: new GraphQLNonNull(GraphQLString)},
        cellphone:{type: new GraphQLNonNull(GraphQLString)}
      },
      resolve:async(parent,args)=>{
        const res = new MBC_LeaderX(args).save();
        return res;
      }
    },
    delete_MBC_Member:
    {
      type:MBC_MemberType,
      args:{
        cellphone:{type: new GraphQLNonNull(GraphQLString)}
      },
      resolve:async(parent,args)=>{
        const res = await new MBC_MemberX.deleteOne({cellphone:args.cellphone});
        return res;
      }
    },
    delete_MBC_Leader:
    {
      type:MBC_leaders,
      args:{
        cellphone:{type: new GraphQLNonNull(GraphQLString)}
      },
      resolve:async(parent,args)=>{
        const res = await new MBC_LeaderX.deleteOne({cellphone:args.cellphone});
        return res;
      }
    }
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'Root',
  fields: 
  {
    MBC_Member:{
      type:new GraphQLList(MBC_MemberType),
      args:{firstname: {type: GraphQLString }},
      resolve:async(parent,args)=>{
        const res = await MBC_MemberX.find();
        let searchRes =[];
        res.map(name=>{
          if(((name.firstname).toLowerCase()).includes((args.firstname).toLowerCase()))
          {
            searchRes.push(name);
            return searchRes
          }
        })
        return searchRes;
      }
    },
    MBC_Leader:{
      type:MBC_leaders,
      args:{firstname: {type: GraphQLString }},
      resolve:async(parent,args)=>{
        const res = await MBC_LeaderX.findOne({firstname:args.firstname});
        return res;
      }
    },
    MBC_allMembers:{
      type:new GraphQLList(MBC_MemberType),
      resolve:async(parent,args)=>{
        const res = await MBC_MemberX.find({});
        return res;
      }
    }
  }
});

schema = new GraphQLSchema({
  mutation,
  query:RootQuery
});

module.exports = schema;
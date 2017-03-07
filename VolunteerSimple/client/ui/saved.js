import { Opportunity }  from '../../lib/opportunity.js'
import { Clients }  from '../../lib/client.js'

Meteor.subscribe("Opportunity");
Meteor.subscribe("Clients");

Template.saved.helpers({
  data: function(){
    var list = Clients.findOne({account: Meteor.user()._id}).saved;
    return Opportunity.find({_id: {$in: list}});
  },
  list: function(){
    return Opportunity.find({accepts: Meteor.user()._id});
  }
});


Template.saved.events({
  'click .deta': function(event){
      console.log("sdf");
      FlowRouter.go("/information/" + event.target.id);
  },
  'click .del': function(event){
    Meteor.call("modSignUp", Meteor.user()._id, event.target.id, "remove");
  }
});

var Leaderboard = Backbone.Model.extend({
  
  // give model url attribute for server to handle
  url: 'api/leaderboard/lifetime/kills',
  updateLeaderboard: function(params) {
    this.url = 'api/leaderboard/' + params.timeFrame + '/' + params.stat;
  }

});
// jscs:disable maximumLineLength

"use strict";

var DEFAULT_SEASON = "2013-14";

function identity ( a ) { return a; }

function boxScoreDefaults () {
  return { "GameID": "0", "RangeType": "0", "StartPeriod": "0", "EndPeriod": "0", "StartRange": "0", "EndRange": "0" };
}

var endpoints = {
  playerProfile: {
    url: "http://stats.nba.com/stats/playerprofile",
    defaults: function () {
      return { "Season": DEFAULT_SEASON, "SeasonType": "Regular Season", "LeagueID": "00", "PlayerID": "0", "GraphStartSeason": "2009-10", "GraphEndSeason": "2014-15", "GraphStat": "PTS"};
    },
    transform: identity
  },
  playerInfo: {
    url: "http://stats.nba.com/stats/commonplayerinfo",
    defaults: function () {
      return { "PlayerID": "0", "SeasonType": "Regular Season", "LeagueID": "00", "asynchFlag": "true" };
    },
    transform: identity
  },
  playersInfo: {
    url: "http://stats.nba.com/stats/commonallplayers",
    defaults: function () {
      return { "LeagueID": "00", "Season": DEFAULT_SEASON, "IsOnlyCurrentSeason": "1" };
    },
    transform: identity
  },
  teamStats: {
    url: "http://stats.nba.com/stats/leaguedashteamstats",
    defaults: function () {
      return { "Season": "2013-14", "AllStarSeason": "", "SeasonType": "Regular Season", "LeagueID": "00", "MeasureType": "Base", "PerMode": "PerGame", "PlusMinus": "N", "PaceAdjust": "N", "Rank": "N", "Outcome": "", "Location": "", "Month": "0", "SeasonSegment": "", "DateFrom": "", "DateTo": "", "OpponentTeamID": "0", "VsConference": "", "VsDivision": "", "GameSegment": "", "Period": "0", "LastNGames": "0", "GameScope": "", "PlayerExperience": "", "PlayerPosition": "", "StarterBench": "" };
    },
    transform: identity
  },
  teamSplits: {
    url: "http://stats.nba.com/stats/teamdashboardbygeneralsplits",
    defaults: function () {
      return { "Season": DEFAULT_SEASON, "SeasonType": "Regular Season", "LeagueID": "00", "TeamID": "0", "MeasureType": "Base", "PerMode": "PerGame", "PlusMinus": "N", "PaceAdjust": "N", "Rank": "N", "Outcome": "", "Location": "", "Month": "0", "SeasonSegment": "", "DateFrom": "", "DateTo": "", "OpponentTeamID": "0", "VsConference": "", "VsDivision": "", "GameSegment": "", "Period": "0", "LastNGames": "0", "GameScope": "" };
    },
    transform: identity
  },
  teamYears: {
    url: "http://stats.nba.com/stats/commonteamyears",
    defaults: function () {
      return { "LeagueID": "00" };
    },
    transform: identity
  },
  playerSplits: {
    url: "http://stats.nba.com/stats/playerdashboardbygeneralsplits",
    defaults: function () {
      return { "Season": DEFAULT_SEASON, "SeasonType": "Playoffs", "LeagueID": "00", "PlayerID": "0", "MeasureType": "Base", "PerMode": "PerGame", "PlusMinus": "N", "PaceAdjust": "N", "Rank": "N", "Outcome": "", "Location": "", "Month": "0", "SeasonSegment": "", "DateFrom": "", "DateTo": "", "OpponentTeamID": "0", "VsConference": "", "VsDivision": "", "GameSegment": "", "Period": "0", "LastNGames": "0" };
    },
    transform: identity
  },
  shots: {
    url: "http://stats.nba.com/stats/shotchartdetail",
    defaults: function () {
      return { "Season": DEFAULT_SEASON, "AllStarSeason": "", "SeasonType": "Regular Season", "LeagueID": "00", "MeasureType": "Base", "PerMode": "PerGame", "PlusMinus": "N", "PaceAdjust": "N", "Rank": "N", "Outcome": "", "Location": "", "Month": "0", "SeasonSegment": "", "DateFrom": "", "DateTo": "", "OpponentTeamID": "0", "VsConference": "", "VsDivision": "", "GameSegment": "", "Period": "0", "LastNGames": "0", "GameScope": "", "PlayerExperience": "", "PlayerPosition": "", "StarterBench": "" };
    },
    transform: identity
  },
  scoreboard: {
    url: "http://stats.nba.com/stats/scoreboard/",
    defaults: function () {
      return { "LeagueID": "00", "gameDate": "01/01/2000", "DayOffset": "0" };
    },
    transform: identity
  },
  playByPlay: {
    url: "http://stats.nba.com/stats/playbyplay",
    defaults: function () {
      return { "GameID": "0021300721", "StartPeriod": "0", "EndPeriod": "0" };
    },
    transform: identity
  },
  boxScoreScoring: {
    url: "http://stats.nba.com/stats/boxscorescoring",
    defaults: boxScoreDefaults,
    transform: identity
  },
  boxScoreUsage: {
    url: "http://stats.nba.com/stats/boxscoreusage",
    defaults: boxScoreDefaults,
    transform: identity
  },
  boxScoreMisc: {
    url: "http://stats.nba.com/stats/boxscoremisc",
    defaults: boxScoreDefaults,
    transform: identity
  },
  boxScoreAdvanced: {
    url: "http://stats.nba.com/stats/boxscoreadvanced",
    defaults: boxScoreDefaults,
    transform: identity
  },
  boxScoreFourFactors: {
    url: "http://stats.nba.com/stats/boxscorefourfactors",
    defaults: boxScoreDefaults,
    transform: identity
  }
};

module.exports = endpoints;

// jscs: enable
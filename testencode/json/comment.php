function : getcolumnsdef
		var allColumnsDef = {}; 
		var colsSeqCore = in file 
		var colsSeqExtra = in file
		var colsEventCoreExtra = in file 
		
		var colsEventCore = colsEventCoreExtra.concat(colsSeqCore);
		
		var colShotExtra = in file
		var colCrossExtra = in file
		var colBallDriveExtra = in file
		var colPassExtra = in file
		var colsTackleExtraFromSeqCore = in file
		var colsHeaderExtraFromSeqCore = in file
		var colsFoulAll = in file 
		
		//update display name ,should be translated in php and save to database.
		for (var variable in colsSeqCore) {
			getDisplayName(colsSeqCore[variable]);
		}
		for (var variable in colsSeqExtra) {
			getDisplayName(colsSeqExtra[variable]);
		}
		for (var variable in colsEventCore) {
			getDisplayName(colsEventCore[variable]);
		}
		for (var variable in colShotExtra) {
			getDisplayName(colShotExtra[variable]);
		}
		for (var variable in colBallDriveExtra) {
			getDisplayName(colBallDriveExtra[variable]);
		}
		for (var variable in colsTackleExtraFromSeqCore) {
			getDisplayName(colsTackleExtraFromSeqCore[variable]);
		}
		for (var variable in colsHeaderExtraFromSeqCore) {
			getDisplayName(colsHeaderExtraFromSeqCore[variable]);
		}
		for (var variable in colCrossExtra) {
			getDisplayName(colCrossExtra[variable]);
		}
		for (var variable in colPassExtra) {
			getDisplayName(colPassExtra[variable]);
		}
		for (var variable in colsFoulAll) {
			getDisplayName(colsFoulAll[variable]);
		}
		//unite the data.
		allColumnsDef[eLiveSubWinType.sequences] = colsSeqCore.concat(colsSeqExtra);
		allColumnsDef[eLiveSubWinType.shots] = colsEventCore.concat(colShotExtra);
		allColumnsDef[eLiveSubWinType.ballDrives] = colsEventCore.concat(colBallDriveExtra);
		allColumnsDef[eLiveSubWinType.crosses] = colsEventCore.concat(colCrossExtra);
		allColumnsDef[eLiveSubWinType.passes] = colsEventCore.concat(colPassExtra);
		allColumnsDef[eLiveSubWinType.throwIn] = colsEventCore.concat(colPassExtra);
		allColumnsDef[eLiveSubWinType.tackles] = colsTackleExtraFromSeqCore.concat(colsSeqCore);
		allColumnsDef[eLiveSubWinType.headers] = colsHeaderExtraFromSeqCore.concat(colsSeqCore);
		allColumnsDef[eLiveSubWinType.fouls] = colsFoulAll;

		return allColumnsDef;
		
		
		
		
function : getStatsColumnsDef  + means some file with suffix Stats
		var allColumnsDef = {};
		var colsEventCore = in file  +
		var colShotExtra = in file  +
		var colCrossExtra = in file +
		var colBallDriveExtra =  in file +
		var colPassExtra = in file +
		
		for (var variable in colsEventCore) {
			getDisplayName(colsEventCore[variable]);
		}
		for (var variable in colShotExtra) {
			getDisplayName(colShotExtra[variable]);
		}
		for (var variable in colBallDriveExtra) {
			getDisplayName(colBallDriveExtra[variable]);
		}
		for (var variable in colCrossExtra) {
			getDisplayName(colCrossExtra[variable]);
		}
		for (var variable in colPassExtra) {
			getDisplayName(colPassExtra[variable]);
		}

		allColumnsDef[eLiveSubWinType.shots] = colsEventCore.concat(colShotExtra);
		allColumnsDef[eLiveSubWinType.ballDrives] = colsEventCore.concat(colBallDriveExtra);
		allColumnsDef[eLiveSubWinType.crosses] = colsEventCore.concat(colCrossExtra);
		allColumnsDef[eLiveSubWinType.passes] = allColumnsDef[eLiveSubWinType.crosses].concat(colPassExtra);

		return allColumnsDef;
		
function :  getStatsBdColumnsDef 
		var allColumnsDef = {};
		var colsPlayerBd = in file 
		var colsTeamBd = in file
		
		
		for (var variable in colsPlayerBd) {
			getDisplayName(colsPlayerBd[variable]);
		}

		for (var variable in colsTeamBd) {
			getDisplayName(colsTeamBd[variable]);
		}

		allColumnsDef[eStatSubWinType.playerBd] = colsPlayerBd;
		allColumnsDef[eStatSubWinType.teamBd] = colsTeamBd;

		return allColumnsDef;
		
		
function : getDisplayName/capitalizeFirstLetter
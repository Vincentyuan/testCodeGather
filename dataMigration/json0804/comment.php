reset TABLES

Truncate table output_cols;
Truncate table win_output_cols;

function : getcolumnsdef
		var allColumnsDef = {};
		var colsSeqCore = in file  // 1,7,8,4,3,5,2,6,14
		var colsSeqExtra = in file // 1
		var colsEventCoreExtra = in file //4,3,5,2,6,14

		var colsEventCore = colsEventCoreExtra.concat(colsSeqCore); 

		var colShotExtra = in file //4
		var colCrossExtra = in file //5
		var colBallDriveExtra = in file //3
		var colPassExtra = in file //2,6
		var colsTackleExtraFromSeqCore = in file //7
		var colsHeaderExtraFromSeqCore = in file //8
		// abandon var colsFoulAll = in file //9
		var colsInterceptionAll = in file //10,9
		var colsFoulExtra = in file //9
	{
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
}
		//unite the data.
		allColumnsDef[eLiveSubWinType.events] = colsEventCore;
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
		var colsEventCore = in file  + // 4,3,5,2
		var colShotExtra = in file  + // 4
		var colCrossExtra = in file + //5,2
		var colBallDriveExtra =  in file + //3
		var colPassExtra = in file + //2

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
		var colsPlayerBd = in file //31
		var colsTeamBd = in file // 32
		var colsFitnessBd = in file //33

		colsFitnessBd = colsFitnessBd.concat(window.opener.extraFitnessColumnsFromFilter);

		for (var variable in colsPlayerBd) {
			getDisplayName(colsPlayerBd[variable]);
		}

		for (var variable in colsTeamBd) {
			getDisplayName(colsTeamBd[variable]);
		}

		allColumnsDef[eStatSubWinType.playerBd] = colsPlayerBd;
		allColumnsDef[eStatSubWinType.teamBd] = colsTeamBd;
		allColumnsDef[eStatSubWinType.fitness] = colsFitnessBd;
		

		return allColumnsDef;


function : getDisplayName/capitalizeFirstLetter

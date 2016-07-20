/**
 * Created by med on 12/02/2016.
 */

function getColumnsDef() {


    var allColumnsDef = {};
    var colsSeqCore = [{
            field: 'game_id',
            displayName: 'Game Id',
            frName: 'Identifiant Match',
            engName: 'Game Id',
            frDesc: 'identifiant du match',
            engDesc: 'game identity',
            chName: '比赛序号',
            chDesc: '比赛序号',
            visible: false,
            filterData: eFilterData.game,
            width: 80,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //cellFilter: 'gameIdToName',
        {

            field: 'game_id',
            displayName: 'Game Title',
            frName: 'Titre Match',
            engName: 'Game Title',
            frDesc: 'Titre du Match',
            engDesc: 'Game Title',
            chName: '比赛标题',
            chDesc: '比赛标题',
            cellFilter: 'gameIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            cellClass: sequenceCellClass,
            filterCellFiltered: true,
            sortCellFiltered: true,
            filter: {
                condition: customFilterCondition
            }
        }, //, filter: {  condition: customFilterCondition}

        {
            field: 'halftime',
            displayName: 'Half Time',
            frName: 'Mi Temps',
            engName: 'Half Time',
            frDesc: 'match décomposé en plusieurs parties : 6: match complet - 1:1ère mi temps - 2: 2ème mi temps',
            engDesc: 'game is making up through different parts : 6 whole game - 1: 1st half - 2: 2nd half',
            chName: '比赛标题',
            chDesc: '比赛标题',
            width: 110,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //2
        {
            field: 'sequence_id',
            displayName: 'Sequence id',
            frName: 'Identifiant Séquence',
            engName: 'Sequence id',
            frDesc: 'Identifiant de la séquence de jeu',
            engDesc: 'Sequence id',
            chName: '序列号',
            chDesc: '序列号',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Start',
            field: 'start_frame',
            frName: 'Début action',
            engName: 'Start',
            frDesc: 'Début de l\'action',
            engDesc: 'Start',
            chName: '开始',
            chDesc: '开始',
            cellFilter: 'toTimeHMS:this.row.entity',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //3
        {
            displayName: 'End',
            field: 'end_frame',
            frName: 'Fin action',
            engName: 'End',
            frDesc: 'Fin de l\'action',
            engDesc: 'End',
            chName: '结束',
            chDesc: '结束',
            cellFilter: 'toTimeHMS:this.row.entity',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //4
        {
            displayName: 'Attacking Team Id',
            field: 'team_id',
            frName: 'Identifiant équipe attaque',
            engName: 'Attacking Team Id',
            frDesc: 'Identifiant de l\'équipe d\'attaque',
            engDesc: 'Attacking Team Id',
            chName: '进攻球队序号',
            chDesc: '进攻球队序号',
            visible: false,
            filterData: eFilterData.playContext,
            filterCondition: filterAttackTeam,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //cellFilter: 'teamIdToName',
        {
            displayName: 'Attacking Team',
            field: 'team_id',
            frName: 'équipe attaque',
            engName: 'Attacking Team ',
            frDesc: 'Equipe qui attaque',
            engDesc: 'Attacking Team ',
            chName: '进攻球队',
            chDesc: '进攻球队',
            cellFilter: 'teamIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        },

        {
            displayName: 'Start X Area Id',
            field: 'start_area_x_id',
            frName: 'Identifiant zone X départ',
            engName: 'Start X Area Id',
            frDesc: 'Identifiant de la zone X de départ',
            engDesc: 'Start X Area Id',
            chName: '开始区域X序号',
            chDesc: '开始区域X序号',
            visible: false,
            filterData: eFilterData.startArea,
            filterCondition: filterStartAreaId,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //6
        {
            displayName: 'End X Aarea Id',
            field: 'end_area_x_id',
            frName: 'Zone X fin',
            engName: 'End X Aarea Id',
            frDesc: 'Identifiant de la zone X de fin',
            engDesc: 'End X Aarea Id',
            chName: '结束区域X序号',
            chDesc: '结束区域X序号',
            visible: false,
            filterData: eFilterData.endArea,
            filterCondition: filterEndAreaId,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //7
        {
            displayName: 'Start Y Area Id',
            field: 'start_area_y_id',
            frName: 'Identifiant zone Y départ',
            engName: 'Start Y Area Id',
            frDesc: 'Identifiant de la zone Y de départ',
            engDesc: 'Start Y Area Id',
            chName: '开始区域Y序号',
            chDesc: '开始区域Y序号',
            visible: false,
            filterData: eFilterData.startArea,
            filterCondition: filterStartAreaId,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //6
        {
            displayName: 'End Y Area Id',
            field: 'end_area_y_id',
            frName: 'Zone Y fin',
            engName: 'End Y Area Id',
            frDesc: 'Identifiant de la zone Y de fin',
            engDesc: 'End Y Area Id',
            chName: '结束区域Y序号',
            chDesc: '结束区域Y序号',
            visible: false,
            filterData: eFilterData.endArea,
            filterCondition: filterEndAreaId,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //7

        {
            displayName: 'Start X Area',
            field: 'start_area_x_id',
            frName: 'Départ zone X',
            engName: 'Start X Area',
            frDesc: 'Départ de la zone X',
            engDesc: 'Start X Area',
            chName: '开始区域X',
            chDesc: '开始区域X',
            cellFilter: 'xAreaIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //6
        {
            displayName: 'End X Area',
            field: 'end_area_x_id',
            frName: 'Fin zone X',
            engName: 'End X Area',
            frDesc: 'Fin de la zone X',
            engDesc: 'End X Area',
            chName: '结束区域X',
            chDesc: '结束区域X',
            cellFilter: 'xAreaIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //7
        {
            displayName: 'Start Y Area',
            field: 'start_area_y_id',
            frName: 'Départ zone Y',
            engName: 'Start Y Area',
            frDesc: 'Départ de la zone Y',
            engDesc: 'Start Y Area',
            chName: '开始区域Y',
            chDesc: '开始区域Y',
            cellFilter: 'yAreaIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //6
        {
            displayName: 'End Y Area',
            field: 'end_area_y_id',
            frName: 'Fin zone Y',
            engName: 'End Y Area',
            frDesc: 'Fin de la zone Y',
            engDesc: 'End Y Area',
            chName: '结束区域Y',
            chDesc: '结束区域Y',
            cellFilter: 'yAreaIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //7

        //    { displayName: 'player', field: 'player_id', filterData : eFilterData.player, cellFilter : 'playerIdToName',  width: 100, cellClass: sequenceCellClass , filter: { condition: customFilterCondition} },
        {
            field: 'start_x',
            displayName: 'Start X',
            frName: 'Départ X',
            engName: 'Start X',
            frDesc: 'Départ X',
            engDesc: 'Start X',
            chName: '开始 X',
            chDesc: '开始 X',
            cellFilter: 'toNumber',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'start_y',
            displayName: 'Start Y',
            frName: 'Départ Y',
            engName: 'Start Y',
            frDesc: 'Départ Y',
            engDesc: 'Start Y',
            chName: '开始 Y',
            chDesc: '开始 Y',
            cellFilter: 'toNumber',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'end_x',
            displayName: 'End X',
            frName: 'Fin X',
            engName: 'End X',
            frDesc: 'Fin X',
            engDesc: 'End X',
            chName: '结束 X',
            chDesc: '结束 X',
            cellFilter: 'toNumber',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'end_y',
            displayName: 'End Y',
            frName: 'Fin Y',
            engName: 'End Y',
            frDesc: 'Fin Y',
            engDesc: 'End Y',
            chName: '结束 Y',
            chDesc: '结束 Y',
            cellFilter: 'toNumber',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        },
        //calculated
        {
            field: 'duration',
            displayName: 'Duration',
            frName: 'Durée',
            engName: 'Duration',
            frDesc: 'Durée',
            engDesc: 'Duration',
            chName: '持续时间',
            chDesc: '持续时间',
            cellFilter: 'getDuration:this.row.entity',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: '100',
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: secondAggreg
        }, {
            field: 'isPlaying',
            displayName: 'Is Playing',
            frName: 'En Lecture',
            engName: 'Is Playing',
            frDesc: 'Indique si l\'action est en lecture vidéo',
            engDesc: 'Is Playing',
            chName: '正在比赛',
            chDesc: '正在比赛',
            width: '80',
            cellClass: sequenceCellClass
        }
    ];

    var colsSeqExtra =[{
        displayName: 'Defending Team Id',
        field: 'def_team_id',
        visible: false,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant équipe défense',
        chName: '防守球队序号',
        chDesc: '防守球队序号',
        engName: 'Defending Team Id',
        engDesc: 'Defending Team Id',
        frDesc: 'identifiant de l\'équipe en défense'
    },{
        displayName: 'Defending Team',
        field: 'def_team_id',
        cellFilter: 'teamIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'Nom équipe défense',
        chName: '防守球队',
        chDesc: '防守球队',
        engName: 'Defending Team ',
        engDesc: 'Defending Team ',
        frDesc: 'nom de l\'équipe en défense'
    },{
        displayName: 'Action Type Id',
        field: 'game_context_id',
        filterData: 7,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'Identifiant type action',
        chName: '活动类型序号',
        chDesc: '活动类型序号',
        engName: 'Action Type Id',
        engDesc: 'Action Type Id',
        frDesc: 'identifiant du type d\'action'
    },{
        displayName: 'Action Type',
        field: 'game_context_id',
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellFilter: 'gameContextIdToName',
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'Type action',
        chName: '活动类型',
        chDesc: '活动类型',
        engName: 'Action Type',
        engDesc: 'Action Type',
        frDesc: 'nom du type d\'action'
    },{
        displayName: 'Start Type Id',
        field: 'start_event_type_id',
        filterData: 8,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant type action départ',
        chName: '开始类型序号',
        chDesc: '开始类型序号',
        engName: 'Start Type Id',
        engDesc: 'Start Type Id',
        frDesc: 'identifiant du type d\'action au départ'
    },{
        displayName: 'Start Type',
        field: 'start_event_type_id',
        cellFilter: 'startEventIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'Identifiant type action départ',
        chName: '开始类型',
        chDesc: '开始类型',
        engName: 'Start Type',
        engDesc: 'Start Type',
        frDesc: 'Identifiant du type d\'action au départ'
    },{
        displayName: '#Passes',
        field: 'nb_pass',
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg,
        frName: 'Nombre passes',
        chName: '过人',
        chDesc: '过人',
        engName: '#Passes',
        engDesc: '#Passes',
        frDesc: 'nombre de passes effectuées'
    },{
        displayName: '#Shots',
        field: 'nb_shot',
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg,
        frName: 'Nombre tirs',
        chName: '射门',
        chDesc: '射门',
        engName: '#Shots',
        engDesc: '#Shots',
        frDesc: 'nombre de tirs effectués'
    },{
        displayName: '#Crosses',
        field: 'nb_cross',
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg,
        frName: 'nombre centres',
        chName: '传球',
        chDesc: '传球',
        engName: '#Crosses',
        engDesc: '#Crosses',
        frDesc: 'nombre de centres effectués'
    },{
        displayName: '#Ball Drives in Box',
        field: 'nb_cross',
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg,
        frName: 'conduite de balle en surface',
        chName: '角球开球',
        chDesc: '角球开球',
        engName: '#Ball Drives in Box',
        engDesc: '#Ball Drives in Box',
        frDesc: 'nombre de conduites de balles dans la surface '
    },{
        field: 'is_ball_recovered',
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg,
        displayName: 'Is Ball Recovered',
        frName: 'récupération ballon',
        chName: '球是否恢复',
        chDesc: '球是否恢复',
        engName: 'Is Ball Recovered',
        engDesc: 'Is Ball Recovered',
        frDesc: 'récupération du ballon par l\'équipe en défense'
    },{
        displayName: 'Ball Recovery Time',
        field: 'time_to_recover_sec',
        width: 100,
        cellFilter: 'toSecond',
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg,
        frName: 'temps récupération ballon',
        chName: '球恢复时间',
        chDesc: '球恢复时间',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Ball Recovery Time',
        engDesc: 'Ball Recovery Time',
        frDesc: 'temps de récupération du ballon par l\'équipe'
    },{
        displayName: 'Ball Recovery Line',
        field: 'ball_recovery_height_m',
        width: 100,
        cellFilter: 'toDistance',
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'hauteur récupération ballon',
        chName: '球恢复行',
        chDesc: '球恢复行',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Ball Recovery Line',
        engDesc: 'Ball Recovery Line',
        frDesc: 'hauteur de récupération du ballon par l\'équipe'
    },{
        displayName: 'Outcome Id',
        field: 'outcome_event_type_id',
        filterData: 9,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant résultat',
        chName: '到来序列',
        chDesc: '到来序列',
        engName: 'Outcome Id',
        engDesc: 'Outcome Id',
        frDesc: 'identifiant du type de résultats à la fin de la séquence'
    },{
        displayName: 'Outcome',
        field: 'outcome_event_type_id',
        cellFilter: 'endEventIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'résultat',
        chName: '到来',
        chDesc: '到来',
        engName: 'Outcome ',
        engDesc: 'Outcome ',
        frDesc: 'nom du type de résultat de fin de la séquence'
    },{
        displayName: 'Best Attack X Area Id',
        field: 'best_pitch_area_x',
        filterData: 11,
        filterCondition: filterBestAreaId,
        width: 160,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'Identifiant meilleure attaque zone X',
        chName: '最佳进攻点X序列',
        chDesc: '最佳进攻点X序列',
        engName: 'Best Attack X Area Id ',
        engDesc: 'Best Attack X Area Id ',
        frDesc: 'identifiant de la région sur l\'axe X  de la meilleure zone d\'attaque de la séquence'
    },{
        displayName: 'Best Attack X Area',
        field: 'best_pitch_area_x',
        cellFilter: 'xAreaIdToName',
        width: 160,
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'Meilleure attaque zone X',
        chName: '最佳进攻点X',
        chDesc: '最佳进攻点X',
        engName: 'Best Attack X Area  ',
        engDesc: 'Best Attack X Area  ',
        frDesc: 'nom de la région sur l\'axe X de la meilleure zone d\'attaque de la séquence'
    },{
        displayName: 'Best Attack Y Area Id',
        field: 'best_pitch_area_y',
        filterData: 11,
        filterCondition: filterBestAreaId,
        width: 160,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'Identifiant meilleure attaque zone Y',
        chName: '最佳进攻点Y序列',
        chDesc: '最佳进攻点Y序列',
        engName: 'Best Attack Y Area Id ',
        engDesc: 'Best Attack Y Area Id ',
        frDesc: 'identifiant de la région sur l\'axe Y orthogonal de la meilleure zone d\'attaque de la séquence'
    },{
        displayName: 'Best Attack Y Area',
        field: 'best_pitch_area_y',
        cellFilter: 'yAreaIdToName',
        width: 160,
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'Meilleure attaque zone Y',
        chName: '最佳进攻点Y',
        chDesc: '最佳进攻点Y',
        engName: 'Best Attack Y Area  ',
        engDesc: 'Best Attack Y Area  ',
        frDesc: 'nom de la région sur l\'axe orthogonal Y de la meilleure zone d\'attaque de la séquence'
    },{
        displayName: 'Begin Attack Y Area Id',
        field: 'first_box_area_y',
        filterData: 10,
        filterCondition: filterBeginAreaId,
        width: 160,
        cellClass: sequenceCellClass,
        visible: false,
        filter: {
            condition: customFilterCondition
        },
        frName: 'Identifiant départ attaque zone Y',
        chName: '开始进攻点Y序列',
        chDesc: '开始进攻点Y序列',
        engName: 'Begin Attack Y Area Id ',
        engDesc: 'Begin Attack Y Area Id ',
        frDesc: 'identifiant de la région sur l\'axe orthogonal Y de la zone de début de l\'attaque'
    },{
        displayName: 'Begin Attack Y Area',
        field: 'first_box_area_y',
        cellFilter: 'yAreaIdToName',
        width: 160,
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellClass: sequenceCellClass,
        visible: false,
        filter: {
            condition: customFilterCondition
        },
        frName: 'départ attaque zone Y',
        chName: '开始进攻点Y',
        chDesc: '开始进攻点Y',
        engName: 'Begin Attack Y Area  ',
        engDesc: 'Begin Attack Y Area  ',
        frDesc: 'nom de la région sur l\'axe orthogonal Y de la zone de début de l\'attaque'
    }];

   
    var colsEventCoreExtra =[{
        displayName: 'Id',
        field: 'event_id',
        width: 50,
        pinnedLeft: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant événement',
        chName: '序列',
        chDesc: '序列',
        engName: 'Id ',
        engDesc: 'Id ',
        frDesc: 'identifiant de l\'événement de jeu'
    },{
        field: 'player_id',
        filterData: 1,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        displayName: 'Player Id',
        frName: 'identifiant joueur',
        chName: '球员序号',
        chDesc: '球员序号',
        engName: 'Player Id ',
        engDesc: 'Player Id ',
        frDesc: 'identifiant du joueur'
    },{
        displayName: 'Player',
        field: 'player_id',
        cellFilter: 'playerIdToName',
        width: 100,
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'nom du joueur',
        chName: '球员',
        chDesc: '球员',
        engName: 'Player  ',
        engDesc: 'Player  ',
        frDesc: 'nom du joueur'
    },{
        displayName: 'Duration',
        cellFilter: 'getDuration:this.row.entity',
        field: 'time_duration',
        filterCellFiltered: true,
        sortCellFiltered: true,
        width: '100',
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: secondAggreg,
        frName: 'durée',
        chName: '区间',
        chDesc: '区间',
        engName: 'Duration  ',
        engDesc: 'Duration  ',
        frDesc: 'durée de l\'événement de jeu'
    },{
        displayName: 'Distance',
        cellFilter: 'toDistance',
        field: 'dist_m',
        filterCellFiltered: true,
        sortCellFiltered: true,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'distance m',
        chName: '距离',
        chDesc: '距离',
        engName: 'Distance m',
        engDesc: 'Distance in meters',
        frDesc: 'distance en mètres'
    },{
        displayName: 'Following Event Id',
        field: 'next_event_type_id',
        filterData: 14,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant événement suivant',
        chName: '后续事件序号',
        chDesc: '后续事件序号',
        engName: 'Following Event Id  ',
        engDesc: 'Following Event Id  ',
        frDesc: 'identifiant de l\'événement de jeu suivant'
    },{
        displayName: 'Following Event',
        field: 'next_event_type_id',
        filterData: 14,
        cellFilter: 'eventIdToName',
        width: 100,
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'événement suivant',
        chName: '后续事件',
        chDesc: '后续事件',
        engName: 'Following Event',
        engDesc: 'Following Event',
        frDesc: 'nom événement suivant'
    },{
        displayName: 'Speed kmh',
        cellFilter: 'toSpeed',
        field: 'speed_kmh',
        filterCellFiltered: true,
        sortCellFiltered: true,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'vitesse kmh',
        chName: '速度 kmh',
        chDesc: '速度 kmh',
        engName: 'Speed kmh',
        engDesc: 'Speed kmh',
        frDesc: 'vitesse en km/h'
    },{
        displayName: 'Success',
        field: 'success_id',
        filterData: 21,
        width: 100,
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: percentAggreg,
        frName: 'événement réussi',
        chName: '成功',
        chDesc: '成功',
        engName: 'Success',
        engDesc: 'Success',
        frDesc: 'événement réussi ou raté'
    },{
        displayName: 'Action Type Id',
        field: 'game_context_id',
        filterData: 7,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant type action',
        chName: '活动类型序号',
        chDesc: '活动类型序号',
        engName: 'Action Type Id',
        engDesc: 'Action Type Id',
        frDesc: 'identifiant du type d\'action'
    },{
        displayName: 'Action Type',
        field: 'game_context_id',
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellFilter: 'gameContextIdToName',
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'Type action',
        chName: '活动类型',
        chDesc: '活动类型',
        engName: 'Action Type ',
        engDesc: 'Action Type ',
        frDesc: 'nom du type d\'action'
    } ];



    var colsEventCore = colsEventCoreExtra.concat(colsSeqCore);

   

    var colShotExtra =[{
        displayName: 'Start Def Id',
        field: 'start_closest_def_id',
        filterData: 16,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant défenseur proche',
        chName: '开始定义序号',
        chDesc: '开始定义序号',
        engName: 'Start Def Id ',
        engDesc: 'Start Def Id',
        frDesc: 'identifiant du défenseur le plus proche en début d\'action'
    },{
        displayName: 'Start Def',
        field: 'start_closest_def_id',
        cellFilter: 'playerIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'nom défenseur proche',
        chName: '开始定义',
        chDesc: '开始定义',
        engName: 'Start Def  ',
        engDesc: 'Start Def ',
        frDesc: 'nom du défenseur le plus proche en début de l\'action'
    },{
        displayName: 'Start Def Dist',
        cellFilter: 'toDistance',
        field: 'start_closest_def_dist',
        filterData: 24,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'distance défenseur proche',
        chName: '开始定义距离',
        chDesc: '开始定义距离',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Start Def Dist ',
        engDesc: 'Start Def Dist',
        frDesc: 'distance par rapport au défenseur le plus proche en début de l\'action'
    },{
        displayName: '#Start Covering Def.',
        field: 'start_n_covering_def',
        filterData: 26,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg,
        frName: 'nombre défenseurs but adverse',
        chName: '开始覆盖定义',
        chDesc: '开始覆盖定义',
        engName: '#Start Covering Def.',
        engDesc: '#Start Covering Def.',
        frDesc: 'nombre des défenseurs entre le joueur et le but adverse en début d\'action'
    },{
        displayName: '#Passes Before',
        field: 'n_pass_begin_seq',
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg,
        frName: 'nombre passes précédentes',
        chName: '过人之前',
        chDesc: '过人之前',
        engName: '#Passes Before',
        engDesc: '#Passes Before',
        frDesc: 'nombre de passes précédentes effectuées'
    },{
        displayName: 'Time Before',
        field: 'time_begin_seq_sec',
        cellFilter: 'toSecond',
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'durée action',
        chName: '时间之前',
        chDesc: '时间之前',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Time Before',
        engDesc: 'Time Before',
        frDesc: 'durée depuis le début de l\'action'
    } ];

 
    var colCrossExtra=[{
        field: 'target_player_id',
        filterData: 15,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        displayName: 'Target Player Id',
        frName: 'identifiant joueur destinataire',
        chName: '目标球员序号',
        chDesc: '目标球员序号',
        engName: 'Target Player Id',
        engDesc: 'Target Player Id',
        frDesc: 'identifiant du joueur destinataire'
    },{
        displayName: 'Target Player',
        field: 'target_player_id',
        width: 100,
        cellFilter: 'playerIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'Joueur destinataire',
        chName: '目标球员',
        chDesc: '目标球员',
        engName: 'Target Player',
        engDesc: 'Target Player',
        frDesc: 'nom du joueur destinataire'
    },{
        displayName: 'Start Def',
        field: 'start_closest_def_id',
        cellFilter: 'playerIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'nom défenseur proche',
        chName: '开始定义',
        chDesc: '开始定义',
        engName: 'Start Def',
        engDesc: 'Start Def',
        frDesc: 'nom du défenseur le plus proche au début de l\'action'
    },{
        displayName: 'Start Def Id',
        field: 'start_closest_def_id',
        filterData: 16,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant défenseur proche début',
        chName: '开始定义序号',
        chDesc: '开始定义序号',
        engName: 'Start Def Id',
        engDesc: 'Start Def Id',
        frDesc: 'identifiant du défenseur le plus proche au début de l\'action'
    },{
        displayName: 'Start Def Dist.',
        cellFilter: 'toDistance',
        field: 'start_closest_def_dist',
        filterData: 24,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'distance défenseur proche début',
        chName: '开始定义距离',
        chDesc: '开始定义距离',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Start Def Dist',
        engDesc: 'Start Def Dist',
        frDesc: 'distance par rapport au défenseur le plus proche au début de l\'action'
    },{
        displayName: 'End Def Id',
        field: 'end_closest_def_id',
        filterData: 17,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant défenseur proche fin',
        chName: '结束定义序号',
        chDesc: '结束定义序号',
        engName: 'End Def Id',
        engDesc: 'End Def Id',
        frDesc: 'identifiant du défenseur le plus proche en fin d\'action'
    },{
        displayName: 'End Def',
        field: 'end_closest_def_id',
        cellFilter: 'playerIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'Identifiant défenseur proche fin',
        chName: '结束定义',
        chDesc: '结束定义',
        engName: 'End Def ',
        engDesc: 'End Def ',
        frDesc: 'Identifiant du défenseur le plus proche en fin d\'action'
    },{
        displayName: 'End Def Dist',
        cellFilter: 'toDistance',
        field: 'end_closest_def_dist',
        filterData: 25,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'distance défenseur proche fin',
        chName: '结束定义距离',
        chDesc: '结束定义距离',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'End Def Dist',
        engDesc: 'End Def Dist',
        frDesc: 'distance par rapport au défenseur le plus proche en fin d\'action'
    },{
        displayName: '#Start Pass Options',
        field: 'start_n_possible_pass',
        filterData: 28,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg,
        frName: 'Options passes début',
        chName: '开始过人的选择',
        chDesc: '开始过人的选择',
        engName: '#Start Pass Options',
        engDesc: '#Start Pass Options',
        frDesc: 'nombre d\'options de passes en début d\'action'
    },{
        displayName: '#Passes Before',
        field: 'n_pass_begin_seq',
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg,
        frName: 'Passes précédentes',
        chName: '过人之前',
        chDesc: '过人之前',
        engName: '#Passes Before',
        engDesc: '#Passes Before',
        frDesc: 'nombre de passes précédentes'
    },{
        displayName: 'Time Before',
        field: 'time_begin_seq_sec',
        cellFilter: 'toSecond',
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'durée début action',
        chName: '时间之前',
        chDesc: '时间之前',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Time Before',
        engDesc: 'Time Before',
        frDesc: 'durée depuis le début de l\'action'
    },{
        displayName: '#Teammates in Box',
        field: 'n_teammates_in_box',
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg,
        frName: 'nombre coéquipiers surface',
        chName: '在角球的队员',
        chDesc: '在角球的队员',
        engName: '#Teammates in Box',
        engDesc: '#Teammates in Box',
        frDesc: 'nombre de coéquipiers dans la surface'
    },{
        displayName: '#Opponents in box',
        field: 'n_opponent_in_box',
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg,
        frName: 'nombre adversaires surface',
        chName: '在角球的对方球队的队员',
        chDesc: '在角球的对方球队的队员',
        engName: '#Opponents in Box',
        engDesc: '#Opponents in Box',
        frDesc: 'nombre d\'adversaires dans la surface'
    }];


    var colBallDriveExtra = [{
        cellFilter: 'toDistance',
        field: 'dist_gained_m',
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        displayName: 'Distance Gained',
        frName: 'distance gagnée',
        chName: '推进距离',
        chDesc: '推进距离',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Distance Gained',
        engDesc: 'Distance Gained',
        frDesc: 'distance gagnée'
    },{
        displayName: '#Start Covering Def.',
        field: 'start_n_covering_def',
        filterData: 26,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg,
        frName: 'départ coverture défenseur',
        chName: '开始覆盖定义',
        chDesc: '开始覆盖定义',
        engName: '#Start Covering Def.',
        engDesc: '#Start Covering Def.',
        frDesc: 'nombre des défenseurs entre le joueur et le but adverse en début d\'action'
    },{
        displayName: '#End Covering Def.',
        field: 'end_n_covering_def',
        filterData: 27,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg,
        frName: 'fin couverture défenseur',
        chName: '结束覆盖定义',
        chDesc: '结束覆盖定义',
        engName: '#End Covering Def.',
        engDesc: '#End Covering Def.',
        frDesc: 'nombre des défenseurs entre le joueur et le but adverse en fin d\'action'
    },{
        field: 'closest_def_id',
        filterData: 18,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        displayName: 'Closest Defender Id',
        frName: 'identifiant défenseur proche',
        chName: '最近防守球员序号',
        chDesc: '最近防守球员序号',
        engName: 'Closest Defender Id',
        engDesc: 'Closest Defender Id',
        frDesc: 'identifiant du défenseur le plus proche'
    },{
        displayName: 'Closest Def',
        field: 'closest_def_id',
        cellFilter: 'playerIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant défenseur proche',
        chName: '最近定义',
        chDesc: '最近定义',
        engName: 'Closest Def',
        engDesc: 'Closest Def',
        frDesc: 'identifiant du défenseur le plus proche'
    },{
        displayName: 'Start Bottom Midfield Id',
        field: 'start_op_bot_mid_play_id',
        filterData: 19,
        width: 100,
        cellFilter: 'playerIdToName',
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant joueur milieu départ',
        chName: '开始底线中区序列',
        chDesc: '开始底线中区序列',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Start Bottom Midfield Id',
        engDesc: 'Start Bottom Midfield Id',
        frDesc: 'identifiant du joueur du milieu le plus bas en début d\'action'
    },{
        displayName: 'End Bottom Midfield Id',
        field: 'end_op_bot_mid_play_id',
        filterData: 20,
        width: 100,
        cellFilter: 'playerIdToName',
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant joueur milieu fin',
        chName: '结束底线中区序列',
        chDesc: '结束底线中区序列',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'End Bottom Midfield Id',
        engDesc: 'End Bottom Midfield Id',
        frDesc: 'identifiant du joueur du milieu le plus bas en fin d\'action'
    },{
        displayName: 'Start Bottom Midfield',
        field: 'start_op_bot_mid_play_id',
        width: 100,
        cellFilter: 'playerIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'Identifiant joueur milieu  début départ',
        chName: '结束底线中区',
        chDesc: '结束底线中区',
        engName: 'Start Bottom Midfield',
        engDesc: 'Start Bottom Midfield',
        frDesc: 'nom du joueur du milieu le plus bas en début d\'action'
    },{
        displayName: 'End Bottom Midfield',
        field: 'end_op_bot_mid_play_id',
        width: 100,
        cellFilter: 'playerIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'nom joueur milieu fin',
        chName: '结束底线中区',
        chDesc: '结束底线中区',
        engName: 'End Bottom Midfield ',
        engDesc: 'End Bottom Midfield ',
        frDesc: 'nom du joueur du milieu le plus bas en fin d\'action'
    },{
        cellFilter: 'toDistance',
        field: 'closest_def_dist',
        filterData: 24,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        displayName: 'undefined',
        frName: 'distance défenseur proche',
        chName: '',
        chDesc: '',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: '',
        engDesc: '',
        frDesc: 'distance par rapport au défenseur le plus proche'
    },{
        displayName: 'Start Position Type Id',
        field: 'start_between_op_midfield_defense',
        filterData: 12,
        width: 100,
        cellFilter: 'positionTypeIdToName',
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant position type départ',
        chName: '开始位置类型序列号',
        chDesc: '开始位置类型序列号',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Start Position Type Id ',
        engDesc: 'Start Position Type Id',
        frDesc: 'identifiant de la position interligne entre le milieu et la défense adverse en début d\'action'
    },{
        displayName: 'End Position Type Id',
        field: 'end_between_op_midfield_defense',
        filterData: 13,
        width: 100,
        cellFilter: 'positionTypeIdToName',
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant position fin',
        chName: '结束位置类型序列号',
        chDesc: '结束位置类型序列号',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'End Position Type Id ',
        engDesc: 'End Position Type Id',
        frDesc: 'identifiant de la position interligne entre le milieu et la défense adverse en fin d\'action'
    },{
        displayName: 'Start Position Type',
        field: 'start_between_op_midfield_defense',
        width: 100,
        cellFilter: 'positionTypeIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'départ type position',
        chName: '开始位置类型',
        chDesc: '开始位置类型',
        engName: 'Start Position Type  ',
        engDesc: 'Start Position Type ',
        frDesc: 'position interligne entre le milieu et la défense adverse en début d\'action'
    }, {
        displayName: 'End Position Type',
        field: 'end_between_op_midfield_defense',
        width: 100,
        cellFilter: 'positionTypeIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'type position fin',
        chName: '结束位置类型',
        chDesc: '结束位置类型',
        engName: 'End Position Type ',
        engDesc: 'End Position Type',
        frDesc: 'position interligne entre le milieu et la défense adverse en fin d\'action'
    }];

  
    var colPassExtra = [{
        displayName: 'Traget Player Id',
        field: 'target_player_id',
        filterData: 15,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant joueur destinataire',
        chName: '目标球员序列号',
        chDesc: '目标球员序列号',
        engName: 'Target Player Id ',
        engDesc: 'Target Player Id',
        frDesc: 'identifiant du joueur destinataire'
    },{
        displayName: 'Target Player',
        field: 'target_player_id',
        cellFilter: 'playerIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'joueur destinataire',
        chName: '目标球员',
        chDesc: '目标球员',
        engName: 'Traget Player  ',
        engDesc: 'Traget Player ',
        frDesc: 'nom du joueur destinataire'
    },{
        cellFilter: 'toDistance',
        field: 'dist_gained_m',
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        displayName: 'Distance Gained',
        frName: 'distance vers l\'avant',
        chName: '推进距离',
        chDesc: '推进距离',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Distance Gained',
        engDesc: 'Distance Gained',
        frDesc: 'distance vers l\'avant de la passe en mètres'
    },{
        displayName: '#Start Covering Def.',
        field: 'start_n_covering_def',
        filterData: 26,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg,
        frName: 'départ couverture défenseur',
        chName: '开始设计定义',
        chDesc: '开始设计定义',
        engName: '#Start Covering Def.',
        engDesc: '#Start Covering Def.',
        frDesc: 'nombre des défenseurs entre le joueur et le but adverse en début d\'action'
    },{
        displayName: '#End Covering Def.',
        field: 'end_n_covering_def',
        filterData: 27,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg,
        frName: 'fin couverture défenseur',
        chName: '结束设计定义',
        chDesc: '结束设计定义',
        engName: '#End Covering Def.',
        engDesc: '#End Covering Def.',
        frDesc: 'nombre des défenseurs entre le joueur et le but adverse en fin d\'action'
    },{
        displayName: 'Start Def Id',
        field: 'start_closest_def_id',
        filterData: 16,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant défenseur départ',
        chName: '开始定义序号',
        chDesc: '开始定义序号',
        engName: 'Start Def Id',
        engDesc: 'Start Def Id',
        frDesc: 'identifiant du défenseur le plus proche en début d\'action'
    },{
        displayName: 'Start Def',
        field: 'start_closest_def_id',
        cellFilter: 'playerIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'départ défenseur',
        chName: '开始定义',
        chDesc: '开始定义',
        engName: 'Start Def ',
        engDesc: 'Start Def ',
        frDesc: 'nom du défenseur le plus proche en début d\'action'
    },{
        displayName: 'Start Def Dist.',
        cellFilter: 'toDistance',
        field: 'start_closest_def_dist',
        filterData: 24,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'départ défenseur distance',
        chName: '开始定义距离',
        chDesc: '开始定义距离',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Start Def Dist',
        engDesc: 'Start Def Dist',
        frDesc: 'distance par rapport au défenseur le plus proche en début d\'action'
    },{
        displayName: 'End Def Id',
        field: 'end_closest_def_id',
        filterData: 17,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant défenseur fin',
        chName: '结束定义序号',
        chDesc: '结束定义序号',
        engName: 'End Def Id',
        engDesc: 'End Def Id',
        frDesc: 'identifiant du défenseur le plus proche en fin d\'action'
    },{
        displayName: 'End Def',
        field: 'end_closest_def_id',
        cellFilter: 'playerIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'défenseur fin',
        chName: '结束定义',
        chDesc: '结束定义',
        engName: 'End Def ',
        engDesc: 'End Def ',
        frDesc: 'nom du défenseur le plus proche en fin d\'action'
    },{
        displayName: 'End Def Dist',
        cellFilter: 'toDistance',
        field: 'end_closest_def_dist',
        filterData: 25,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'défenseur fin distance',
        chName: '结束定义距离',
        chDesc: '结束定义距离',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'End Def Dist',
        engDesc: 'End Def Dist',
        frDesc: 'distance par rapport au défenseur le plus proche en fin d\'action'
    },{
        displayName: '#Start Pass Options',
        field: 'start_n_possible_pass',
        filterData: 28,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg,
        frName: 'nombre options passes départ',
        chName: '开始过人选择',
        chDesc: '开始过人选择',
        engName: '#Start Pass Options',
        engDesc: '#Start Pass Options',
        frDesc: 'nombre d\'options de passes en début d\'action'
    },{
        displayName: '#End Pass Options',
        field: 'end_n_possible_pass',
        filterData: 29,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg,
        frName: 'nombre options passes fin',
        chName: '结束过人选择',
        chDesc: '结束过人选择',
        engName: '#End Pass Options',
        engDesc: '#End Pass Options',
        frDesc: 'nombre d\'options de passes en fin d\'action'
    }, {
        displayName: 'Pass Angle',
        field: 'angle_degree',
        width: 100,
        cellFilter: 'getPassAngleValue:this.row.entity',
        filterCellFiltered: true,
        sortCellFiltered: true,
        filterField: getPassAngle,
        filterData: 23,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'angle passe',
        chName: '过人角度',
        chDesc: '过人角度',
        engName: 'Pass Angle',
        engDesc: 'Pass Angle',
        frDesc: 'angle de la passe entre 0° et 360°'
    }];

    
    var colsTackleExtraFromSeqCore = [{
    displayName: 'Id',
    field: 'event_id',
    width: 50,
    pinnedLeft: true,
    cellClass: sequenceCellClass,
    filter: {
        condition: customFilterCondition
    },
    frName: 'identifiant événement',
    chName: '序号',
    chDesc: '序号',
    engName: 'Id',
    engDesc: 'Id',
    frDesc: 'identifiant de l\'événement de jeu'
},{
    field: 'player_id',
    filterData: 1,
    width: 100,
    cellClass: sequenceCellClass,
    filter: {
        condition: customFilterCondition
    },
    displayName: 'Player Id',
    frName: 'identifiant joueur',
    chName: '球员序号',
    chDesc: '球员序号',
    engName: 'Player Id',
    engDesc: 'Player Id',
    frDesc: 'identifiant du joueur'
},{
    displayName: 'Player',
    field: 'player_id',
    width: 100,
    cellFilter: 'playerIdToName',
    filterCellFiltered: true,
    sortCellFiltered: true,
    cellClass: sequenceCellClass,
    filter: {
        condition: customFilterCondition
    },
    frName: 'joueur',
    chName: '球员',
    chDesc: '球员',
    engName: 'Player',
    engDesc: 'Player',
    frDesc: 'nom du joueur'
},{
    field: 'team_id',
    width: 100,
    filterData: 5,
    cellClass: sequenceCellClass,
    filter: {
        condition: customFilterCondition
    },
    displayName: 'Team',
    frName: 'Identifiant Équipe',
    chName: '球队序号',
    chDesc: '球队序号',
    engName: 'Team Id',
    engDesc: 'identity of the team',
    frDesc: 'identifiant de l\'équipe en attaque'
}, {
    displayName: 'Team',
    field: 'team_id',
    width: 100,
    cellFilter: 'teamIdToName',
    filterCellFiltered: true,
    sortCellFiltered: true,
    cellClass: sequenceCellClass,
    filter: {
        condition: customFilterCondition
    },
    frName: 'équipe',
    chName: '球队',
    chDesc: '球队',
    engName: 'Team',
    engDesc: 'Team',
    frDesc: 'nom de l\'équipe en attaque'
}];

    var colsHeaderExtraFromSeqCore = [{
        displayName: 'Id',
        field: 'event_id',
        width: 50,
        pinnedLeft: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant événement',
        chName: '序号',
        chDesc: '序号',
        engName: 'Id',
        engDesc: 'Id',
        frDesc: 'identifiant de l\'événement de jeu'
    },{
        field: 'player_id',
        filterData: 1,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        displayName: 'Player Id',
        frName: 'identifiant joueur',
        chName: '球员序号',
        chDesc: '球员序号',
        engName: 'Player Id',
        engDesc: 'Player Id',
        frDesc: 'identifiant du joueur'
    },{
        displayName: 'Player',
        field: 'player_id',
        width: 100,
        cellFilter: 'playerIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'joueur',
        chName: '球员',
        chDesc: '球员',
        engName: 'Player',
        engDesc: 'Player',
        frDesc: 'nom du joueur'
    },{
        displayName: 'Previous Event Id',
        field: 'previous_event_type_id',
        filterData: 22,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant precedent événement',
        chName: '前一个事件序号',
        chDesc: '前一个事件序号',
        engName: 'Previous Event Id',
        engDesc: 'Previous Event Id',
        frDesc: 'identifiant du precedent événement de jeu'
    },{
        displayName: 'Previous Event',
        field: 'previous_event_type_id',
        cellFilter: 'eventIdToName',
        width: 100,
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'precedent événement',
        chName: '前一个事件',
        chDesc: '前一个事件',
        engName: 'Previous Event ',
        engDesc: 'Previous Event ',
        frDesc: 'nom du precedent événement de jeu'
    },{
        field: 'team_id',
        width: 100,
        filterData: 5,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        displayName: 'Team Id',
        frName: 'Identifiant Équipe',
        chName: '球队序号',
        chDesc: '球队序号',
        engName: 'Team Id',
        engDesc: 'identity of the team',
        frDesc: 'identifiant de l\'équipe'
    }, {
        displayName: 'Team',
        field: 'team_id',
        width: 100,
        cellFilter: 'teamIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'Équipe',
        chName: '球队',
        chDesc: '球队',
        engName: 'Team',
        engDesc: 'Team',
        frDesc: 'nom de l\'équipe'
    }];

   

    var colsFoulAll = [{
        field: 'game_id',
        filterData: 2,
        width: 80,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        displayName: 'Game Id',
        frName: 'Identifiant Match',
        chName: '比赛序号',
        chDesc: '比赛序号',
        engName: 'Game Id',
        engDesc: 'game identity',
        frDesc: 'identifiant du match'
    },{
        displayName: 'Game Title',
        field: 'game_id',
        cellFilter: 'gameIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'Titre Match',
        chName: '比赛标题',
        chDesc: '比赛标题',
        engName: 'Game Title',
        engDesc: 'Game Title',
        frDesc: 'titre du match'
    },{
        field: 'halftime',
        width: 110,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        displayName: 'Half Time',
        frName: 'Mi Temps',
        chName: '半场',
        chDesc: '半场',
        engName: 'Half Time',
        engDesc: 'game is making up through different parts : 6 whole game - 1: 1st half - 2: 2nd half',
        frDesc: 'match décomposé en plusieurs parties : 6: match complet / 1:1ère mi temps / 2: 2ème mi temps'
    },{
        field: 'sequence_id',
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        displayName: 'Sequence Id',
        frName: 'identifiant séquence',
        chName: '片段序号',
        chDesc: '片段序号',
        engName: 'Sequence Id',
        engDesc: 'Sequence Id',
        frDesc: 'identifiant de la séquence de jeu'
    },{
        displayName: 'Id',
        field: 'event_id',
        width: 50,
        pinnedLeft: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant événement',
        chName: '序号',
        chDesc: '序号',
        engName: 'Id',
        engDesc: 'Id',
        frDesc: 'identifiant de l\'événement de jeu'
    },{
        displayName: 'Start',
        field: 'frame',
        cellFilter: 'toTimeHMS:this.row.entity',
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'début événement',
        chName: '开始',
        chDesc: '开始',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Start',
        engDesc: 'Start',
        frDesc: 'début de l\'événement de jeu'
    },{
        field: 'team_id',
        width: 100,
        filterData: 5,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        displayName: 'Team Id',
        frName: 'Identifiant Équipe',
        chName: '球队序号',
        chDesc: '球队序号',
        engName: ' Team Id',
        engDesc: ' identity of the team',
        frDesc: 'identifiant de l\'équipe'
    },{
        displayName: 'Team',
        field: 'team_id',
        width: 100,
        cellFilter: 'teamIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'Équipe',
        chName: '球队',
        chDesc: '球队',
        engName: 'Team',
        engDesc: 'Team',
        frDesc: 'nom de l\'équipe'
    },{
        field: 'player_id',
        filterData: 1,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        displayName: 'Player Id',
        frName: 'identifiant joueur',
        chName: '球员序号',
        chDesc: '球员序号',
        engName: 'Player Id',
        engDesc: 'Player Id',
        frDesc: 'identifiant du joueur'
    },{
        displayName: 'Player',
        field: 'player_id',
        width: 100,
        cellFilter: 'playerIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'joueur',
        chName: '球员',
        chDesc: '球员',
        engName: 'Player',
        engDesc: 'Player',
        frDesc: 'nom du joueur'
    },{
        displayName: 'Start X Area Id',
        field: 'start_area_x_id',
        visible: false,
        filterData: 3,
        filterCondition: filterStartAreaId,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant début zone X',
        chName: '开始区域X序号',
        chDesc: '开始区域X序号',
        engName: 'Start X Area Id',
        engDesc: 'Start X Area Id',
        frDesc: 'identifiant de la région du terrain de début sur l\'axe x'
    },{
        displayName: 'Start X Area',
        field: 'start_area_x_id',
        cellFilter: 'xAreaIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'début zone X',
        chName: '开始区域X',
        chDesc: '开始区域X',
        engName: 'Start X Area ',
        engDesc: 'Start X Area ',
        frDesc: 'nom de la région du terrain sur l\'axe x'
    },{
        displayName: 'Start Y Area Id',
        field: 'start_area_y_id',
        visible: false,
        filterData: 3,
        filterCondition: filterStartAreaId,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant début zone Y',
        chName: '开始区域Y序号',
        chDesc: '开始区域Y序号',
        engName: 'Start Y Area Id',
        engDesc: 'Start Y Area Id',
        frDesc: 'identifiant de la région du terrain de début sur l\'axe orthogonal Y'
    },{
        displayName: 'Start Y Area',
        field: 'start_area_y_id',
        cellFilter: 'yAreaIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'début zone Y',
        chName: '开始区域 Y',
        chDesc: '开始区域 Y',
        engName: 'Start  Y  Area ',
        engDesc: 'Start  Y Area ',
        frDesc: 'nom de la région du terrain de début sur l\'axe orthogonal Y'
    },{
        field: 'start_x',
        cellFilter: 'toNumber',
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        displayName: 'Start X',
        frName: 'début zone X',
        chName: '开始区域 X',
        chDesc: '开始区域 X',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Start X ',
        engDesc: 'Start  X ',
        frDesc: 'position de début sur l\'axe X du terrain'
    },{
        field: 'start_y',
        cellFilter: 'toNumber',
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        displayName: 'Start Y',
        frName: 'position début axe Y',
        chName: '开始区域 Y',
        chDesc: '开始区域 Y',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Start Y ',
        engDesc: 'Start  Y ',
        frDesc: 'position de début sur l\'axe orthogonal Y du terrain'
    },{
        displayName: 'Previous Event Id',
        field: 'previous_event_type_id',
        filterData: 22,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant événement precedent',
        chName: '前一个事件序号',
        chDesc: '前一个事件序号',
        engName: 'Previous Event Id ',
        engDesc: 'Previous Event Id',
        frDesc: 'identifiant du precedent événement de jeu'
    },{
        displayName: 'previous Event',
        field: 'previous_event_type_id',
        filterData: 22,
        cellFilter: 'eventIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'precedent événement',
        chName: '前一个事件',
        chDesc: '前一个事件',
        engName: 'Previous Event  ',
        engDesc: 'Previous Event ',
        frDesc: 'nom du precedent événement de jeu'
    },{
        displayName: 'Foul Cost Id',
        field: 'foul_cost_type_id',
        filterData: 'undefined',
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'identifiant faute',
        chName: '犯规代价序号',
        chDesc: '犯规代价序号',
        engName: 'Foul Cost Id  ',
        engDesc: 'Foul Cost Id ',
        frDesc: 'identifiant du résultat de la faute'
    },{
        displayName: 'Foul Cost',
        field: 'foul_cost_type_id',
        cellFilter: 'foulCostIdToName',
        width: 100,
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'résultat faute',
        chName: '犯规代价',
        chDesc: '犯规代价',
        engName: 'Foul Cost  ',
        engDesc: 'Foul Cost ',
        frDesc: 'résultat de la faute'
    }, {
        field: 'isPlaying',
        width: '80',
        cellClass: sequenceCellClass,
        displayName: 'Is Playing',
        frName: 'En lecture vidéo',
        chName: '正在比赛',
        chDesc: '正在比赛',
        engName: 'Is　Playing ',
        engDesc: 'Is　Playing ',
        frDesc: 'indique si la séquence de jeu est en lecture vidéo'
    }];

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
}

function getStatsColumnsDef() {


    var allColumnsDef = {};
    
    var colsEventCore = [{
        displayName: '#',
        field: 'nb',
        width: 80,
        filter: {
            condition: customFilterCondition
        },
        frName: 'nombre total',
        chName: '#',
        chDesc: '#',
        engName: '#',
        engDesc: '#',
        frDesc: 'nombre total'
    },{
        field: 'teamId',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        displayName: 'Team Id',
        frName: 'Identifiant Équipe',
        chName: '球队序号',
        chDesc: '球队序号',
        engName: 'Team Id',
        engDesc: 'identity of the team',
        frDesc: 'identifiant de l\'équipe'
    },{
        field: 'playerId',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        displayName: 'Player Id',
        frName: 'identifiant joueur',
        chName: '球员序号',
        chDesc: '球员序号',
        engName: 'Player Id',
        engDesc: 'Player Id',
        frDesc: 'identifiant du joueur'
    },{
        displayName: 'Team',
        field: 'teamId',
        width: 100,
        cellFilter: 'teamIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'Équipe',
        chName: '球队',
        chDesc: '球队',
        engName: 'Team',
        engDesc: 'Team ',
        frDesc: 'nom de l\'équipe'
    },{
        displayName: 'Player',
        field: 'playerId',
        width: 100,
        cellFilter: 'playerIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        },
        frName: 'joueur',
        chName: '球员',
        chDesc: '球员',
        engName: 'Player',
        engDesc: 'Player ',
        frDesc: 'nom du joueur'
    },{
        field: 'success',
        cellFilter: 'toPercent',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        displayName: 'Success',
        frName: 'taux réussite',
        chName: '成功',
        chDesc: '成功',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Success',
        engDesc: 'Success ',
        frDesc: 'taux de réussite'
    },{
        displayName: 'Start x',
        field: 'startPoint.x',
        cellFilter: 'toNumber',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'départ x',
        chName: '开始 X',
        chDesc: '开始 X',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Start x',
        engDesc: 'Start x ',
        frDesc: 'position moyenne de début sur l\'axe X du terrain'
    },{
        displayName: 'Start y',
        field: 'startPoint.y',
        cellFilter: 'toNumber',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'départ Y',
        chName: '开始 y',
        chDesc: '开始 y',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Start y',
        engDesc: 'Start y ',
        frDesc: 'position moyenne de début sur l\'axe orthogonal Y du terrain'
    },{
        displayName: 'End x',
        field: 'endPoint.x',
        cellFilter: 'toNumber',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'fin X',
        chName: '结束 x',
        chDesc: '结束 x',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'End x',
        engDesc: 'End x ',
        frDesc: 'position moyenne de fin sur l\'axe X du terrain'
    },{
        displayName: 'End y',
        field: 'endPoint.y',
        cellFilter: 'toNumber',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'fin Y',
        chName: '结束 y',
        chDesc: '结束 y',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'End y',
        engDesc: 'End y ',
        frDesc: 'position moyenne de fin sur l\'axe orthogonal Y du terrain'
    },{
        field: 'duration',
        cellFilter: 'toSecond',
        width: '100',
        filter: {
            condition: customFilterCondition
        },
        displayName: 'Duration',
        frName: 'durée',
        chName: '持续时间',
        chDesc: '持续时间',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Duration',
        engDesc: 'Duration ',
        frDesc: 'durée moyenne'
    },{
        displayName: 'Distance',
        field: 'dist',
        cellFilter: 'toDistance',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'distance moyenne m',
        chName: '距离',
        chDesc: '距离',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Distance',
        engDesc: 'Distance ',
        frDesc: 'distance moyenne en mètres'
    },{
        displayName: 'Distance Max',
        field: 'maxDist',
        cellFilter: 'toDistance',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'distance max m',
        chName: '距离最大值',
        chDesc: '距离最大值',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Distance Max',
        engDesc: 'Distance Max',
        frDesc: 'distance max en mètres'
    },{
        field: 'speed',
        cellFilter: 'toSpeed',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        displayName: 'Speed',
        frName: 'vitesse kmh',
        chName: '速度',
        chDesc: '速度',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Speed',
        engDesc: 'Speed',
        frDesc: 'vitesse moyenne en km/h'
    },{
        displayName: 'Speed Max',
        field: 'maxSpeed',
        cellFilter: 'toSpeed',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'vitesse max kmh',
        chName: '速度最大值',
        chDesc: '速度最大值',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Speed Max',
        engDesc: 'Distance Max',
        frDesc: 'vitesse max en km/h'
    },{
        displayName: 'Top Following Event #1',
        field: 'followingEvents',
        cellFilter: 'top1EventIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'meilleur événement suivant 1',
        chName: '紧随的事件1',
        chDesc: '紧随的事件1',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Top Following Event #1',
        engDesc: 'Top Following Event #1',
        frDesc: 'meilleur événement de jeu suivant'
    },{
        displayName: 'Top Following Event #2',
        field: 'followingEvents',
        cellFilter: 'top2EventIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'meilleur événement suivant 2',
        chName: '紧随的事件2',
        chDesc: '紧随的事件2',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Top Following Event #2',
        engDesc: 'Top Following Event #2',
        frDesc: 'meilleur événement de jeu suivant'
    }, {
        displayName: 'Top Following Event #3',
        field: 'followingEvents',
        cellFilter: 'top3EventIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'meilleur événement suivant 3',
        chName: '紧随的事件3',
        chDesc: '紧随的事件3',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Top Following Event #3',
        engDesc: 'Top Following Event #3',
        frDesc: 'meilleur événement de jeu suivant'
    }];

    var colShotExtra = [{
        displayName: 'Defender Dist.',
        cellFilter: 'toDistance',
        field: 'startDefenderDist',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'distance défenseur',
        chName: '防守区域',
        chDesc: '防守区域',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Defender Dist.',
        engDesc: 'Defender Dist.',
        frDesc: 'distance moyenne par rapport au défenseur le plus proche en mètres'
    },{
        displayName: '#Defenders',
        field: 'startNbDefenders',
        cellFilter: 'toNumber',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'nombre défenseurs',
        chName: '防守球员',
        chDesc: '防守球员',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: '#Defenders',
        engDesc: '#Defenders',
        frDesc: 'nombre des défenseurs'
    },{
        displayName: 'Top Defenders #1',
        field: 'startDefenderIds',
        cellFilter: 'top1PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'premier défenseur 1',
        chName: '最近的防守球员1',
        chDesc: '最近的防守球员1',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Top Defenders #1',
        engDesc: 'Top Defenders #1',
        frDesc: 'premier défenseur le plus proche en moyenne'
    },{
        displayName: 'Top Defenders #2',
        field: 'startDefenderIds',
        cellFilter: 'top2PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'premier défenseur 2',
        chName: '最近的防守球员2',
        chDesc: '最近的防守球员2',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Top Defenders #2',
        engDesc: 'Top Defenders #2',
        frDesc: 'défenseur le plus proche en moyenne'
    }, {
        displayName: 'Top Defenders #3',
        field: 'startDefenderIds',
        cellFilter: 'top3PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'premier défenseur 3',
        chName: '最近的防守球员3',
        chDesc: '最近的防守球员3',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Top Defenders #3',
        engDesc: 'Top Defenders #3',
        frDesc: 'troisième défenseur le plus proche en moyenne'
    }];
    

    var colCrossExtra = [{
        displayName: 'Start Pass Options',
        cellFilter: 'toNumber',
        field: 'startPassOptions',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'Option passes départ',
        chName: '开始传球选择',
        chDesc: '开始传球选择',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Start Pass Options',
        engDesc: 'Start Pass Options',
        frDesc: 'nombre d\'options de passes moyen en en début d\'action'
    },{
        displayName: 'Start Defender Dist.',
        cellFilter: 'toDistance',
        field: 'startDefenderDist',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'Défenseur distance départ',
        chName: '防守球员开始区域',
        chDesc: '防守球员开始区域',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Start Defender Dist.',
        engDesc: 'Start Defender Dist.',
        frDesc: 'distance moyenne par rapport au défenseur le plus proche en début d\'action en mètres'
    },{
        displayName: 'End Defender Dist.',
        cellFilter: 'toDistance',
        field: 'endDefenderDist',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'Défenseur distance fin',
        chName: '防守球员结束区域',
        chDesc: '防守球员结束区域',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'End Defender Dist.',
        engDesc: 'End Defender Dist.',
        frDesc: 'distance moyenne par rapport au défenseur le plus proche en fin d\'action en mètres'
    },{
        displayName: 'Target Player #1',
        field: 'targetPlayerIds',
        cellFilter: 'top1PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'joueur destinataire 1',
        chName: '目标球员1',
        chDesc: '目标球员1',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Target Player #1',
        engDesc: 'Target Player #1',
        frDesc: 'premier joueur destinataire en moyenne'
    },{
        displayName: 'Target Player #2',
        field: 'targetPlayerIds',
        cellFilter: 'top2PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'joueur destinataire 2',
        chName: '目标球员2',
        chDesc: '目标球员2',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Target Player #2',
        engDesc: 'Target Player #2',
        frDesc: 'deuxième joueur destinataire en moyenne'
    },{
        displayName: 'Target Player #3',
        field: 'targetPlayerIds',
        cellFilter: 'top3PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'joueur destinataire 3',
        chName: '目标球员3',
        chDesc: '目标球员3',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Target Player #3',
        engDesc: 'Target Player #3',
        frDesc: 'troisième joueur destinataire en moyenne'
    },{
        displayName: 'Start Defender #1',
        field: 'startDefenderIds',
        cellFilter: 'top1PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'départ premier défenseur',
        chName: '初始防守球员1',
        chDesc: '初始防守球员1',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Start Defender #1',
        engDesc: 'Start Defender #1',
        frDesc: 'premier défenseur le plus proche en moyenne en début d\'action'
    },{
        displayName: 'Start Defender #2',
        field: 'startDefenderIds',
        cellFilter: 'top2PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'départ deuxième défenseur',
        chName: '初始防守球员2',
        chDesc: '初始防守球员2',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Start Defender #2',
        engDesc: 'Start Defender #2',
        frDesc: 'deuxième défenseur le plus proche en moyenne en début d\'action'
    },{
        displayName: 'Start Defender #3',
        field: 'startDefenderIds',
        cellFilter: 'top3PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'départ troisième défenseur',
        chName: '初始防守球员3',
        chDesc: '初始防守球员3',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Start Defender #3',
        engDesc: 'Start Defender #3',
        frDesc: 'troisième défenseur le plus proche en moyenne en début d\'action'
    },{
        displayName: 'End Defender #1',
        field: 'endDefenderIds',
        cellFilter: 'top1PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'fin premier défenseur',
        chName: '终止防守球员1',
        chDesc: '终止防守球员1',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'End Defender #1',
        engDesc: 'End Defender #1',
        frDesc: 'premier défenseur le plus proche en moyenne en fin d\'action'
    },{
        displayName: 'End Defender #2',
        field: 'endDefenderIds',
        cellFilter: 'top2PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'fin deuxième défenseur',
        chName: '终止防守球员2',
        chDesc: '终止防守球员2',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'End Defender #2',
        engDesc: 'End Defender #2',
        frDesc: 'deuxième défenseur le plus proche en moyenne en fin d\'action'
    }, {
        displayName: 'End Defender #3',
        field: 'endDefenderIds',
        cellFilter: 'top3PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'fin troisième défenseur',
        chName: '终止防守球员3',
        chDesc: '终止防守球员3',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'End Defender #3',
        engDesc: 'End Defender #3',
        frDesc: 'troisième défenseur le plus proche en moyenne en fin d\'action'
    }];
    
  

    var colBallDriveExtra = [{
        displayName: '#Fwd',
        field: 'fwd',
        cellFilter: 'toPercent',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'nombre vers l\'avant',
        chName: '推进',
        chDesc: '推进',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: '#Fwd',
        engDesc: '#Fwd',
        frDesc: 'nombre vers l\'avant'
    },{
        displayName: 'Fwd Success',
        field: 'fwdSuccess',
        cellFilter: 'toPercent',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'taux réussite vers l\'avant',
        chName: '推进成功',
        chDesc: '推进成功',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Fwd Success',
        engDesc: 'Fwd Success',
        frDesc: 'taux de réussite vers l\'avant'
    },{
        displayName: 'Start #Defenders',
        field: 'startNbDefenders',
        cellFilter: 'toNumber',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'départ défenseur',
        chName: '初始防守球员',
        chDesc: '初始防守球员',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Start #Defenders',
        engDesc: 'Start #Defenders',
        frDesc: 'nombre des défenseurs moyen en début d\'action'
    },{
        displayName: 'End #Defenders',
        field: 'endNbDefenders',
        cellFilter: 'toNumber',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'fin défenseur',
        chName: '结束防守球员',
        chDesc: '结束防守球员',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'End #Defenders',
        engDesc: 'End #Defenders',
        frDesc: 'nombre des défenseurs moyen en fin d\'action'
    },{
        displayName: 'Closest Defender Dist.',
        cellFilter: 'toDistance',
        field: 'closestDefenderDist',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation,
        frName: 'distance défenseur proche',
        chName: '最近的防守区域',
        chDesc: '最近的防守区域',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Closest Defender Dist.',
        engDesc: 'Closest Defender Dist.',
        frDesc: 'distance moyenne par rapport au défenseur le plus proche en mètres'
    },{
        displayName: 'Top Defenders #1',
        field: 'closestDefenderIds',
        cellFilter: 'top1PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'premier défenseur',
        chName: '最近的防守球员1',
        chDesc: '最近的防守球员1',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Top Defenders #1',
        engDesc: 'Top Defenders #1',
        frDesc: 'premier défenseur le plus proche en moyenne'
    },{
        displayName: 'Top Defenders #2',
        field: 'closestDefenderIds',
        cellFilter: 'top2PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'deuxième défenseur',
        chName: '最近的防守球员2',
        chDesc: '最近的防守球员2',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Top Defenders #2',
        engDesc: 'Top Defenders #2',
        frDesc: 'deuxième défenseur le plus proche en moyenne'
    },{
        displayName: 'Top Defenders #3',
        field: 'closestDefenderIds',
        cellFilter: 'top3PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'troisième défenseur',
        chName: '最近的防守球员3',
        chDesc: '最近的防守球员3',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Top Defenders #3',
        engDesc: 'Top Defenders #3',
        frDesc: 'troisième défenseur le plus proche en moyenne'
    },{
        displayName: 'Start Pos Type #1',
        field: 'startPosType',
        cellFilter: 'top1PosTypeIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'départ position type 1',
        chName: '开始位置类型1',
        chDesc: '开始位置类型1',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Start Pos Type #1',
        engDesc: 'Start Pos Type #1',
        frDesc: 'première position interligne en moyenne entre le milieu et la défense adverse en début d\'action'
    },{
        displayName: 'Start Pos Type #2',
        field: 'startPosType',
        cellFilter: 'top2PosTypeIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'départ position type 2',
        chName: '开始位置类型2',
        chDesc: '开始位置类型2',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Start Pos Type #2',
        engDesc: 'Start Pos Type #2',
        frDesc: 'deuxième position interligne en moyenne entre le milieu et la défense adverse en début d\'action'
    },{
        displayName: 'Start Pos Type #3',
        field: 'startPosType',
        cellFilter: 'top3PosTypeIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'départ position type 3',
        chName: '开始位置类型3',
        chDesc: '开始位置类型3',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Start Pos Type #3',
        engDesc: 'Start Pos Type #3',
        frDesc: 'troisième position interligne en moyenne entre le milieu et la défense adverse en début d\'action'
    },{
        displayName: 'End Pos Type #1',
        field: 'endPosType',
        cellFilter: 'top1PosTypeIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'fin position type 1',
        chName: '结束位置类型1',
        chDesc: '结束位置类型1',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'End Pos Type #1',
        engDesc: 'End Pos Type #1',
        frDesc: 'première position interligne en moyenne entre le milieu et la défense adverse en fin d\'action'
    },{
        displayName: 'End Pos Type #2',
        field: 'endPosType',
        cellFilter: 'top2PosTypeIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'fin position type 2',
        chName: '结束位置类型2',
        chDesc: '结束位置类型2',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'End Pos Type #2',
        engDesc: 'End Pos Type #2',
        frDesc: 'deuxième position interligne en moyenne entre le milieu et la défense adverse en fin d\'action'
    },{
        displayName: 'End Pos Type #3',
        field: 'endPosType',
        cellFilter: 'top3PosTypeIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'fin positon type 3',
        chName: '结束位置类型3',
        chDesc: '结束位置类型3',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'End Pos Type #3',
        engDesc: 'End Pos Type #3',
        frDesc: 'troisième position interligne en moyenne entre le milieu et la défense adverse en fin d\'action'
    },{
        displayName: 'Top Bottom MidField #1',
        field: 'startBottomMidFieldPlayerIds',
        cellFilter: 'top1PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'premier milieu',
        chName: '我不知道该写啥',
        chDesc: '我不知道该写啥',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Top Bottom MidField #1',
        engDesc: 'Top Bottom MidField #1',
        frDesc: 'premier joueur du milieu le plus bas'
    },{
        displayName: 'Top Bottom MidField #2',
        field: 'startBottomMidFieldPlayerIds',
        cellFilter: 'top2PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'deuxième milieu',
        chName: '我不知道该写啥',
        chDesc: '我不知道该写啥',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Top Bottom MidField #2',
        engDesc: 'Top Bottom MidField #2',
        frDesc: 'deuxième joueur du milieu le plus bas'
    }, {
        displayName: 'Top Bottom MidField #3',
        field: 'startBottomMidFieldPlayerIds',
        cellFilter: 'top3PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        frName: 'troisième milieu ',
        chName: '我不知道该写啥',
        chDesc: '我不知道该写啥',
        filterCellFiltered: true,
        sortCellFiltered: true,
        engName: 'Top Bottom MidField #3',
        engDesc: 'Top Bottom MidField #3',
        frDesc: 'troisième joueur du milieu le plus bas'
    }];
    
    

    var colPassExtra = [{
    displayName: 'Start #Defenders',
    field: 'startNbDefenders',
    cellFilter: 'toNumber',
    width: 100,
    filter: {
        condition: customFilterCondition
    },
    treeAggregationType: 'avg',
    customTreeAggregationFinalizerFn: rowValueAggregation,
    frName: 'départ défenseur',
    chName: '初始防守球员',
    chDesc: '初始防守球员',
    filterCellFiltered: true,
    sortCellFiltered: true,
    engName: 'Start #Defenders',
    engDesc: 'Start #Defenders',
    frDesc: 'nombre des défenseurs moyen en début d\'action'
},{
    displayName: 'End #Defenders',
    field: 'endNbDefenders',
    cellFilter: 'toNumber',
    width: 100,
    filter: {
        condition: customFilterCondition
    },
    treeAggregationType: 'avg',
    customTreeAggregationFinalizerFn: rowValueAggregation,
    frName: 'fin défenseur',
    chName: '终止防守球员',
    chDesc: '终止防守球员',
    filterCellFiltered: true,
    sortCellFiltered: true,
    engName: 'End #Defenders',
    engDesc: 'End #Defenders',
    frDesc: 'nombre des défenseurs moyen en fin d\'action'
},{
    displayName: '#Fwd',
    field: 'fwd',
    cellFilter: 'toPercent',
    width: 100,
    filter: {
        condition: customFilterCondition
    },
    treeAggregationType: 'avg',
    customTreeAggregationFinalizerFn: rowValueAggregation,
    frName: 'vers l\'avant',
    chName: '推进',
    chDesc: '推进',
    filterCellFiltered: true,
    sortCellFiltered: true,
    engName: '#Fwd',
    engDesc: '#Fwd',
    frDesc: 'nombre vers l\'avant'
},{
    field: 'fwdSuccess',
    cellFilter: 'toPercent',
    width: 100,
    filter: {
        condition: customFilterCondition
    },
    treeAggregationType: 'avg',
    customTreeAggregationFinalizerFn: rowValueAggregation,
    displayName: 'Fwd Success',
    frName: 'taux réussite vers l\'avant',
    chName: '推进成功',
    chDesc: '推进成功',
    filterCellFiltered: true,
    sortCellFiltered: true,
    engName: 'Fwd Success',
    engDesc: 'Fwd Success',
    frDesc: 'taux de réussite vers l\'avant'
},{
    displayName: 'Fwd Distance',
    field: 'distX',
    cellFilter: 'toDistance',
    width: 100,
    filter: {
        condition: customFilterCondition
    },
    treeAggregationType: 'avg',
    customTreeAggregationFinalizerFn: rowValueAggregation,
    frName: 'distance vers l\'avant m',
    chName: '推进距离',
    chDesc: '推进距离',
    filterCellFiltered: true,
    sortCellFiltered: true,
    engName: 'Fwd Distance',
    engDesc: 'Fwd Distance',
    frDesc: 'distance moyenne vers l\'avant en mètres'
},{
    displayName: 'Fwd Distance Max',
    field: 'maxDistX',
    cellFilter: 'toDistance',
    width: 100,
    filter: {
        condition: customFilterCondition
    },
    treeAggregationType: 'avg',
    customTreeAggregationFinalizerFn: rowValueAggregation,
    frName: 'distance max vers l\'avant m',
    chName: '推进距离最大值',
    chDesc: '推进距离最大值',
    filterCellFiltered: true,
    sortCellFiltered: true,
    engName: 'Fwd Distance Max',
    engDesc: 'Fwd Distance Max',
    frDesc: 'distance max vers l\'avant en mètres'
},{
    displayName: 'End Pass Options',
    cellFilter: 'toNumber',
    field: 'endPassOptions',
    width: 100,
    filter: {
        condition: customFilterCondition
    },
    treeAggregationType: 'avg',
    customTreeAggregationFinalizerFn: rowValueAggregation,
    frName: 'nombre options passes fin',
    chName: '终止传球选择',
    chDesc: '终止传球选择',
    filterCellFiltered: true,
    sortCellFiltered: true,
    engName: 'End Pass Options',
    engDesc: 'End Pass Options',
    frDesc: 'nombre d\'options de passes en fin d\'action'
},{
    displayName: 'Avg. Angle',
    field: 'angle',
    cellFilter: 'toNumber',
    width: 100,
    filterCellFiltered: true,
    sortCellFiltered: true,
    filter: {
        condition: customFilterCondition
    },
    treeAggregationType: 'avg',
    customTreeAggregationFinalizerFn: rowValueAggregation,
    frName: 'angle moyen',
    chName: '平均角度',
    chDesc: '平均角度',
    engName: 'Avg. Angle',
    engDesc: 'Avg. Angle',
    frDesc: 'angle moyen'
},{
    displayName: 'Left Angle',
    field: 'leftAngleRatio',
    cellFilter: 'toPercent',
    width: 100,
    filterCellFiltered: true,
    sortCellFiltered: true,
    filter: {
        condition: customFilterCondition
    },
    treeAggregationType: 'avg',
    customTreeAggregationFinalizerFn: rowValueAggregation,
    frName: 'angle gauche',
    chName: '左角度',
    chDesc: '左角度',
    engName: 'Left Angle',
    engDesc: 'Left Angle',
    frDesc: 'pourcentage vers la gauche'
},{
    displayName: 'Right Angle',
    field: 'rightAngleRatio',
    cellFilter: 'toPercent',
    width: 100,
    filterCellFiltered: true,
    sortCellFiltered: true,
    filter: {
        condition: customFilterCondition
    },
    treeAggregationType: 'avg',
    customTreeAggregationFinalizerFn: rowValueAggregation,
    frName: 'angle droit',
    chName: '右角度',
    chDesc: '右角度',
    engName: 'Right Angle',
    engDesc: 'Right Angle',
    frDesc: 'pourcentage vers la droite'
},{
    displayName: 'Front Angle',
    field: 'frontAngleRatio',
    cellFilter: 'toPercent',
    width: 100,
    filterCellFiltered: true,
    sortCellFiltered: true,
    filter: {
        condition: customFilterCondition
    },
    treeAggregationType: 'avg',
    customTreeAggregationFinalizerFn: rowValueAggregation,
    frName: 'angle vers l\'avant',
    chName: '前角度',
    chDesc: '前角度',
    engName: 'Front Angle',
    engDesc: 'Front Angle',
    frDesc: 'pourcentage vers l\'avant'
}, {
    displayName: 'Back Angle',
    field: 'backAngleRatio',
    cellFilter: 'toPercent',
    width: 100,
    filterCellFiltered: true,
    sortCellFiltered: true,
    filter: {
        condition: customFilterCondition
    },
    treeAggregationType: 'avg',
    customTreeAggregationFinalizerFn: rowValueAggregation,
    frName: 'angle vers l\'arrière',
    chName: '后角度',
    chDesc: '后角度',
    engName: 'Back Angle',
    engDesc: 'Back Angle',
    frDesc: 'pourcentage vers l\'arrière'
}];


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
}

function getStatsBdColumnsDef() {

    var allColumnsDef = {};
   
    var colsPlayerBd = [{
      field: 'game_id',
      displayName: 'Game Id',
      frName: 'Identifiant Match',
      engName: 'Game Id',
      frDesc: 'identifiant du match',
      engDesc: 'game identity',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      chName: '比赛序号',
      chDesc: '比赛序号'
  },{
      field: 'halftime',
      displayName: 'Halftime',
      frName: 'Mi Temps',
      engName: 'Halftime',
      frDesc: 'match décomposé en plusieurs parties : 6: match complet / 1:1ère mi temps / 2: 2ème mi temps',
      engDesc: 'game is making up through different parts : 6 whole game / 1: 1st half / 2: 2nd half',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      chName: '半场时间',
      chDesc: '半场时间'
  },{
      field: 'team_id',
      displayName: 'Team Id',
      frName: 'Identifiant Équipe',
      engName: 'Team Id',
      frDesc: 'identifiant de l\'équipe',
      engDesc: 'identity of the team',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      chName: '球队序号',
      chDesc: '球队序号'
  },{
      field: 'player_id',
      displayName: 'Player Id',
      frName: 'identifiant joueur',
      engName: 'Player Id',
      frDesc: 'identifiant du joueur',
      engDesc: 'player identity',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      chName: '球员序号',
      chDesc: '球员序号'
  },{
      field: 'team_id',
      displayName: 'Team',
      frName: 'Équipe',
      engName: 'Team',
      frDesc: 'nom de l\'équipe',
      engDesc: 'team name',
      cellFilter: 'teamIdToName',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      chName: '球队',
      chDesc: '球队'
  },{
      field: 'player_id',
      displayName: 'Player',
      frName: 'joueur',
      engName: 'Player',
      frDesc: 'nom du joueur',
      engDesc: 'player name',
      cellFilter: 'playerIdToName',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      chName: '球员',
      chDesc: '球员'
  },{
      field: 'game_id',
      displayName: 'Game Title',
      frName: 'Titre Match',
      engName: 'Game Title',
      frDesc: 'titre du match',
      engDesc: 'game title',
      cellFilter: 'gameIdToName',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      chName: '比赛标题',
      chDesc: '比赛标题'
  },{
      field: 'ball_touched',
      displayName: 'Ball Touched',
      frName: 'ballon touché',
      engName: 'Ball Touched',
      frDesc: 'ballons touchés par le joueur',
      engDesc: 'ball touched by the team',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '控球',
      chDesc: '控球'
  },{
      field: 'goals',
      displayName: 'Goals',
      frName: 'Buts',
      engName: 'Goals',
      frDesc: 'buts marqués par un joueur',
      engDesc: 'goals scored by a team',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '进球数',
      chDesc: '进球数'
  },{
      field: 'shots',
      displayName: 'Shots',
      frName: 'Tirs',
      engName: 'Shots',
      frDesc: 'tirs effectués par un joueur',
      engDesc: 'shots made by a team',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '射门数',
      chDesc: '射门数'
  },{
      field: 'shots_ot_rate',
      displayName: 'Shots Successful On Target',
      frName: 'Tirs Cadrés',
      engName: 'Shots Successful On Target',
      frDesc: 'tirs ou frappes réussis avec une trajectoire vers l\'intérieur du but',
      engDesc: 'successful shots made by a team to the goal',
      cellFilter: 'toPercentOnly',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '射门什么率',
      chDesc: '射门什么率'
  },{
      field: 'ncross',
      displayName: 'Cross',
      frName: 'Centres',
      engName: 'Cross',
      frDesc: 'envoyer le ballon dans la surface de réparation depuis les côtés',
      engDesc: 'send the ball into the penalty area from the sides',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '通过',
      chDesc: '通过'
  },{
      field: 'cross_rate',
      displayName: 'Successful Cross',
      frName: 'Centres Réussis',
      engName: 'Successful Cross',
      frDesc: 'envoyer le ballon dans la surface de réparation depuis les côtés avec un partenaire qui le récupère',
      engDesc: 'send the ball into the penalty area from the sides with a partner who gets it',
      cellFilter: 'toPercentOnly',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '通过率？',
      chDesc: '通过率？'
  },{
      field: 'pass',
      displayName: 'Pass',
      frName: 'Passes',
      engName: 'Pass',
      frDesc: 'envoyer le ballon à un coéquipier',
      engDesc: 'send the ball to a team-mate',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '传球',
      chDesc: '传球'
  },{
      field: 'fwd_pass',
      displayName: 'Pass Forward',
      frName: 'Passes Vers l\'avant',
      engName: 'Pass Forward',
      frDesc: 'envoyer le ballon à un coéquipier vers l\'avant',
      engDesc: 'send the ball forward to a team-mate',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '前进传球',
      chDesc: '前进传球'
  },{
      field: 'pass_pressure',
      displayName: 'Passe Pressure',
      frName: 'passes sous pression',
      engName: 'Passe Pressure',
      frDesc: 'envoyer le ballon à un coéquipier sous pression défensive d\'un adversaire à moins de 2 m',
      engDesc: 'under pressure, send the ball to a team-mate with an opponent at less than 2m',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '防守传球',
      chDesc: '防守传球'
  },{
      field: 'pass_dist_avg',
      displayName: 'Pass Distance Average',
      frName: 'Distance Passe Moyenne',
      engName: 'Pass Distance Average',
      frDesc: 'distance de passe moyenne par joueur',
      engDesc: 'average distance pass for a team',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '传球平均距离',
      chDesc: '传球平均距离'
  },{
      field: 'pass_dxdist_avg',
      displayName: 'Pass Forward Distance Average',
      frName: 'passes en avant',
      engName: 'Pass Forward Distance Average',
      frDesc: 'distance moyenne de pass vers l\'axe avant',
      engDesc: 'average forward pass distance',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '传球平均Dx距离',
      chDesc: '传球平均Dx距离'
  },{
      field: 'pass_rate',
      displayName: 'Successful Pass',
      frName: 'Passes réussies',
      engName: 'Successful Pass',
      frDesc: 'envoyer le ballon a un coéquipier et que celui-ci le récupère',
      engDesc: 'send the ball to a team-mate and he gets it',
      cellFilter: 'toPercentOnly',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '传球率',
      chDesc: '传球率'
  },{
      field: 'fwd_pass_rate',
      displayName: 'Successful Pass Forward',
      frName: 'Passes vers l\'avant réussies',
      engName: 'Successful Pass Forward',
      frDesc: 'envoyer le ballon à un coéquipier vers l\'avant et que celui-ci le récupère',
      engDesc: 'send the ball to a team-mate forward and he gets it',
      cellFilter: 'toPercentOnly',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '前进传球率',
      chDesc: '前进传球率'
  },{
      field: 'pass_pressure_rate',
      displayName: 'Successful Pass Under Pressure',
      frName: 'Passes sous pression réussies',
      engName: 'Successful Pass Under Pressure',
      frDesc: 'envoyer le ballon à un coéquipier sous pression défensive d\'un adversaire à moins de 2 m et que le coéquipier le récupère',
      engDesc: 'send the ball to a team mate under pressure with a opponent at less than 2m and the team mate gets the ball',
      cellFilter: 'toPercentOnly',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '防守传球率',
      chDesc: '防守传球率'
  },{
      field: 'pass_pressure_dxdist_avg',
      displayName: 'Pass Under Pressure Forward Distance Average',
      frName: 'distance moyenne passe avant sous pression',
      engName: 'Pass Under Pressure Forward Distance Average',
      frDesc: 'distance moyenne de pass sou spression vers l\'axe avant',
      engDesc: 'average forward pass distance under pressure',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '防守传球平均Dx距离',
      chDesc: '防守传球平均Dx距离'
  },{
      field: 'ball_drive',
      displayName: 'Ball Drive',
      frName: 'Conduite De Balle',
      engName: 'Ball Drive',
      frDesc: 'conduite de balle d\'un joueur',
      engDesc: 'ball drive player',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '运球',
      chDesc: '运球'
  },{
      field: 'bd_dist_avg',
      displayName: 'Average Distance By Ball Drive',
      frName: 'Distance gagné par conduite de balle',
      engName: 'Average Distance By Ball Drive',
      frDesc: 'distance moyenne parcourue en conduite de balle',
      engDesc: 'average distance made by ball drive',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '运球平均距离',
      chDesc: '运球平均距离'
  },{
      field: 'bd_dxdist_avg',
      displayName: 'Average Distance Gained By Ball Drive',
      frName: 'Distance par Conduite de Balle',
      engName: 'Average Distance Gained By Ball Drive',
      frDesc: 'distance moyenne gagné par le joueur en conduite de balle',
      engDesc: 'average distance gained by a player with a ball drive',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '运球平均Dx距离',
      chDesc: '运球平均Dx距离'
  },{
      field: 'bd_beat_def_avg',
      displayName: 'Number Of Opponent Eliminate By Ball Drive',
      frName: 'Adversaires éliminés par conduite de balle',
      engName: 'Number Of Opponent Eliminate By Ball Drive',
      frDesc: 'nombre d\'adversaires éliminés suite à conduite de balle par le joueur',
      engDesc: 'number of opponent eliminate after a ball drive',
      cellFilter: 'toNumber',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '运球甩开防守球员',
      chDesc: '运球甩开防守球员'
  },{
      field: 'ball_drive_rate',
      displayName: 'Successful Ball Drive',
      frName: 'Conduite De Balle Réussie',
      engName: 'Successful Ball Drive',
      frDesc: 'conduite de balle d\'un joueur sans perte du ballon',
      engDesc: 'ball drive of a player without losing the ball',
      cellFilter: 'toPercentOnly',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '控球率',
      chDesc: '控球率'
  },{
      field: 'header',
      displayName: 'Header',
      frName: 'Têtes',
      engName: 'Header',
      frDesc: 'reprise du ballon par un joueur de la tête',
      engDesc: 'header of a player',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '头球',
      chDesc: '头球'
  },{
      field: 'header_rate',
      displayName: 'Successful Header ',
      frName: 'têtes réussies',
      engName: 'Successful Header ',
      frDesc: 'tête d\'un joueur réussie',
      engDesc: 'successful header of a player',
      cellFilter: 'toPercentOnly',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '头球率',
      chDesc: '头球率'
  },{
      field: 'interception',
      displayName: 'Interception',
      frName: 'Interception',
      engName: 'Interception',
      frDesc: 'interception du ballon par un joueur après une passe, un centre, un tir, une tête ou une touche de l\'équipe adversaire',
      engDesc: 'interception of the ball by a player after a pass, a cross, a shot, an head or a throw in of the away team',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '抢断',
      chDesc: '抢断'
  },{
      field: 'clean_intercp',
      displayName: 'Clean Interception',
      frName: 'Interception sans faute',
      engName: 'Clean Interception',
      frDesc: 'interception d\'un joueur sur un joueur adversaire sans faute',
      engDesc: 'interception by the team on the other team wihout foul',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '直接抢断',
      chDesc: '直接抢断'
  },{
      field: 'pass_intercep',
      displayName: 'Pass Or Cross Interception',
      frName: 'Passes ou centres interceptés',
      engName: 'Pass Or Cross Interception',
      frDesc: 'interception d\'une passe ou d\'un centre par un joueur de l\'équipe adverse',
      engDesc: 'interception of a pass or a cross by the team',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '传球抢断',
      chDesc: '传球抢断'
  },{
      field: 'dribl_intercep',
      displayName: 'Dribble Interception',
      frName: 'Dribbles interceptés',
      engName: 'Dribble Interception',
      frDesc: 'interception du dribble d\'un joueur par un joueur de l\'équipe adverse',
      engDesc: 'interception by a player after a dribble of an opponent',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '夹击抢断',
      chDesc: '夹击抢断'
  },{
      field: 'ball_pressure',
      displayName: 'Ball Pressure',
      frName: 'pressing porteur ballon',
      engName: 'Ball Pressure',
      frDesc: 'pressing de l\'équipe adverse sur le porteur du ballon',
      engDesc: 'pressing of the team of the ball driver',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '球防守',
      chDesc: '球防守'
  },{
      field: 'indirect_intercep',
      displayName: 'Indirect Interception',
      frName: 'interception indirect',
      engName: 'Indirect Interception',
      frDesc: 'interception du ballon par un joueur après une passe, un centre, un tir, une tête ou une touche de l\'équipe adversaire de manière indirecte',
      engDesc: 'interception of the ball by a player after a pass, a cross, a shot, an head or a throw in of the away team by a indirect way',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '间接防守',
      chDesc: '间接防守'
  },{
      field: 'ball_press_back_pass',
      displayName: 'Pressing Which Leads A Pass Backward',
      frName: 'Pressing passe vers l\'arrière',
      engName: 'Pressing Which Leads A Pass Backward',
      frDesc: 'pressing du joueur adversaire sur le porteur du ballon qui conduit a une passe vers l\'arrière de celui-ci',
      engDesc: 'pressure of the away team on the player with the ball where the player make a pass backward',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '触球后回传',
      chDesc: '触球后回传'
  },{
      field: 'foul',
      displayName: 'Foul',
      frName: 'Fautes',
      engName: 'Foul',
      frDesc: 'fautes pour contestation',
      engDesc: 'foul by contestation',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '犯规',
      chDesc: '犯规'
  },{
      field: 'foul_suffered',
      displayName: 'Foul Suffered',
      frName: 'fautes subies ',
      engName: 'Foul Suffered',
      frDesc: 'fautes subies par un joueur',
      engDesc: 'foul suffered because of an opponent',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '被犯规',
      chDesc: '被犯规'
  },{
      field: 'speed',
      displayName: 'Speed',
      frName: 'vitesse',
      engName: 'Speed',
      frDesc: 'vitesse du joueur',
      engDesc: 'speed of the player',
      cellFilter: 'toSpeed',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '速度',
      chDesc: '速度'
  },{
      field: 'sprint_rate',
      displayName: 'Sprint Rate',
      frName: 'Temps sprint',
      engName: 'Sprint Rate',
      frDesc: 'pourcentage de temps en sprint pour un joueur',
      engDesc: 'time of the player in sprint',
      cellFilter: 'toPercent',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '冲刺比',
      chDesc: '冲刺比'
  },{
      field: 'walk_rate',
      displayName: 'Walk Rate',
      frName: 'Temps Marche',
      engName: 'Walk Rate',
      frDesc: 'pourcentage de temps en marche',
      engDesc: 'time of the player in walk',
      cellFilter: 'toPercent',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '走路比',
      chDesc: '走路比'
  },{
      field: 'walk_rate_attack',
      displayName: 'Walk Rate Attack',
      frName: 'Temps Marche Attaque',
      engName: 'Walk Rate Attack',
      frDesc: 'pourcentage de temps en marche en attaque',
      engDesc: 'time of the player in walk in attack',
      cellFilter: 'toPercent',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '走路进攻比',
      chDesc: '走路进攻比'
  },{
      field: 'walk_rate_defense',
      displayName: 'Walk Rate Defense',
      frName: 'temps marche défense',
      engName: 'Walk Rate Defense',
      frDesc: 'pourcentage de temps en marche en défense',
      engDesc: 'time of the player in walk in défense',
      cellFilter: 'toPercent',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '走路防守比',
      chDesc: '走路防守比'
  },{
      field: 'sprint_rate_attack',
      displayName: 'Sprint Rate Attack',
      frName: 'temps sprint attaque',
      engName: 'Sprint Rate Attack',
      frDesc: 'pourcentage de temps en sprint d\'un joueur en attaque',
      engDesc: 'time of the player in sprint in attack',
      cellFilter: 'toPercent',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '冲刺进攻比',
      chDesc: '冲刺进攻比'
  },{
      field: 'sprint_rate_defense',
      displayName: 'Sprint Rate Defense',
      frName: 'temps sprint défense',
      engName: 'Sprint Rate Defense',
      frDesc: 'pourcentage de temps en sprint d\'un joueur en défense',
      engDesc: 'time of the player in sprint in attack',
      cellFilter: 'toPercent',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '冲刺防守比',
      chDesc: '冲刺防守比'
  },{
      field: 'cum_dist',
      displayName: 'Total Distance',
      frName: 'Distance Totale Parcourue',
      engName: 'Total Distance',
      frDesc: 'Distance parcourue',
      engDesc: 'player total distance made',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '累计距离',
      chDesc: '累计距离'
  },{
      field: 'speed_attack',
      displayName: 'Speed Attack',
      frName: 'vitesse attaque',
      engName: 'Speed Attack',
      frDesc: 'vitesse moyenne en attaque pour un joueur',
      engDesc: 'average speed for a player in attack',
      cellFilter: 'toSpeed',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '进攻速度',
      chDesc: '进攻速度'
  },{
      field: 'cum_dist_attack',
      displayName: 'Total Distance Made In Attaque',
      frName: 'Total distance parcourue attaque',
      engName: 'Total Distance Made In Attaque',
      frDesc: 'distance total parcourue en attaque par un joueur',
      engDesc: 'average distance by a player in attack',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '进攻累计距离',
      chDesc: '进攻累计距离'
  },{
      field: 'speed_defense',
      displayName: 'Speed Defense',
      frName: 'vitesse défense',
      engName: 'Speed Defense',
      frDesc: 'vitesse moyenne en défense pour un joueur',
      engDesc: 'average speed by a player in defense',
      cellFilter: 'toSpeed',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '防守速度',
      chDesc: '防守速度'
  },{
      field: 'cum_dist_defense',
      displayName: 'Total Distance Made In Defense',
      frName: 'Total distance parcourue défense',
      engName: 'Total Distance Made In Defense',
      frDesc: 'distance total parcourue en défense par un joueur',
      engDesc: 'average distance made by a player in defense',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '防守累计距离',
      chDesc: '防守累计距离'
  },{
      field: 'tm_dist_min_tavg',
      displayName: 'Distance To The Nearest Team-Mate',
      frName: 'distance coéquipier proche',
      engName: 'Distance To The Nearest Team-Mate',
      frDesc: 'distance moyenne d\'un joueur au plus proche coéquipier ',
      engDesc: 'average distance of a player to his nearest team mate',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '？？？',
      chDesc: '？？？'
  },{
      field: 'opp_dist_min_tavg',
      displayName: 'Opponent Distance',
      frName: 'Distance adversaire',
      engName: 'Opponent Distance',
      frDesc: 'distance de marquage d\'un joueur au plus proche adversaire',
      engDesc: 'average marking of a player to the nearest opponent',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '？？？',
      chDesc: '？？？'
  },{
      field: 'opp_dist_min_tavg_defense',
      displayName: 'Opponent Distance In Defense',
      frName: 'distance adversaire défense',
      engName: 'Opponent Distance In Defense',
      frDesc: 'distance de marquage d\'un joueur au plus proche d\'un adversaire en situation de défense',
      engDesc: 'average marking of a player to the nearest opponent in defense',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '？？？',
      chDesc: '？？？'
  },{
      field: 'opp_dist_min_tavg_attack',
      displayName: 'Opponent Distance In Attack',
      frName: 'distance adversaire attaque',
      engName: 'Opponent Distance In Attack',
      frDesc: 'distance de marquage d\'un joueur au plus proche d\'un adversaire en situation d\'attaque',
      engDesc: 'average marking of a player to the nearest opponent in attack',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '？？？',
      chDesc: '？？？'
  },{
      field: 'tm_dist_min_tavg_attack',
      displayName: 'Distance To The Nearest Team-Mate In Attack',
      frName: 'distance coéquipier proche attaque',
      engName: 'Distance To The Nearest Team-Mate In Attack',
      frDesc: 'distance moyenne d\'un joueur au plus proche d\'un coéquipier en situation d\'attaque',
      engDesc: 'average marking of a player to the nearest team mate in attack',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '？？？',
      chDesc: '？？？'
  },{
      field: 'tm_dist_min_tavg_defense',
      displayName: 'Distance To The Nearest Team-Mate In Defense',
      frName: 'distance coéquipier proche défense',
      engName: 'Distance To The Nearest Team-Mate In Defense',
      frDesc: 'distance moyenne d\'un joueur au plus proche d\'un coequipier en situation de défense',
      engDesc: 'average marking of a player to the nearest team mate in defense',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '？？？',
      chDesc: '？？？'
  },{
      field: 'sl_tm_dist_min_tavg_defense',
      displayName: 'Distance To The Nearest Team-Mate On The Same Line In Defense',
      frName: 'distance coéquipier proche ligne défense',
      engName: 'Distance To The Nearest Team-Mate On The Same Line In Defense',
      frDesc: 'distance moyenne d\'un joueur au plus proche coéquipier sur la même ligne en défense ',
      engDesc: 'average marking of a player to the nearest team mate on the same line in defense',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '？？？',
      chDesc: '？？？'
  },{
      field: 'sl_tm_dist_min_tavg_attack',
      displayName: 'Distance To The Nearest Team-Mate On The Same Line In Attaque',
      frName: 'distance coéquipier proche ligne attaque',
      engName: 'Distance To The Nearest Team-Mate On The Same Line In Attaque',
      frDesc: 'distance moyenne d\'un joueur au plus proche coéquipier sur la même ligne en attaque',
      engDesc: 'average marking of a player to the nearest team mate on the same line in attack',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '？？？',
      chDesc: '？？？'
  },{
      field: 'sl_tm_dist_min_tavg',
      displayName: 'Distance To The Nearest Team-Mate On The Same Line',
      frName: 'Distance Proche Coéquipier Ligne',
      engName: 'Distance To The Nearest Team-Mate On The Same Line',
      frDesc: 'distance moyenne d\'un joueur au plus proche coéquipier sur la même ligne',
      engDesc: 'average marking of a player to the nearest team mate on the same line ',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '？？？',
      chDesc: '？？？'
  },{
      field: 'shot_from_box',
      displayName: 'Shot From Box',
      frName: 'tirs surface',
      engName: 'Shot From Box',
      frDesc: 'tirs effectués par un joueur avec une tentative de but depuis la surface',
      engDesc: 'shot made by a player in the penalty area',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '角球射门',
      chDesc: '角球射门'
  },{
      field: 'shot_from_box_ot',
      displayName: 'Shot From Box On Target',
      frName: 'tirs cadrés surface',
      engName: 'Shot From Box On Target',
      frDesc: 'tirs ou frappes effectués par un joueur depuis la surface avec une trajectoire vers l\'intérieur du but',
      engDesc: 'shote made by a player in the penalty area on target',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '角球射门OT',
      chDesc: '角球射门OT'
  },{
      field: 'shot_pressure',
      displayName: 'Shot Under Pressure',
      frName: 'tirs sous pression',
      engName: 'Shot Under Pressure',
      frDesc: 'tirs effectués par un joueur sous pression de l\'équipe adversaire ou d\'un joueur adversaire',
      engDesc: 'shot made by a player under the pressure of an opponent',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '射门防守',
      chDesc: '射门防守'
  },{
      field: 'shot_pressure_ot',
      displayName: 'Shot Under Pressure On Target',
      frName: 'tirs cadrés sous pression',
      engName: 'Shot Under Pressure On Target',
      frDesc: 'tirs effectués par un joueur sous pression de l\'équipe adversaire ou d\'un joueur adversaire avec une trajectoire vers l\'intérieur du but',
      engDesc: 'shot made on target by a player under the pressure of an opponent ',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '射门防守 OT',
      chDesc: '射门防守 OT'
  },{
      field: 'ncross_in_thebox',
      displayName: 'Cross In The Box',
      frName: 'Centre Surface',
      engName: 'Cross In The Box',
      frDesc: 'envoyer le ballon dans la surface de réparation depuis les côtés par un joueur',
      engDesc: 'send the ball in the penalty area from the sides',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '角球传球次数？',
      chDesc: '角球传球次数？'
  },{
      field: 'ball_drive_pressure',
      displayName: 'Ball Drive Under Pressure',
      frName: 'conduite de balle sous pression',
      engName: 'Ball Drive Under Pressure',
      frDesc: 'conduite de balle d\'un joueur sous pression de l\'équipe adversaire ou d\'un joueur adversaire',
      engDesc: 'ball drive of a player under the pressure the opponents ',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '运球防守',
      chDesc: '运球防守'
  },{
      field: 'ball_drive_bmd',
      displayName: 'Ball Drive Between Middle And Defense ',
      frName: 'conduite de balle milieu défense',
      engName: 'Ball Drive Between Middle And Defense ',
      frDesc: 'conduite de balle d\'un joueur entre la ligne milieu et la ligne de défense',
      engDesc: 'ball drive of a player between the middle line and the defense line',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '运球??',
      chDesc: '运球??'
  },{
      field: 'ball_drive_pressure_rate',
      displayName: 'Successfull Ball Drive Under Pressure',
      frName: 'conduite de balle sous pression',
      engName: 'Successfull Ball Drive Under Pressure',
      frDesc: 'conduite de balle réussie d\'un joueur sous pression',
      engDesc: 'successuf ball drive of a player under pressure',
      cellFilter: 'toPercentOnly',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '运球防守比',
      chDesc: '运球防守比'
  },{
      field: 'ball_drive_bmd_rate',
      displayName: 'Successfull Ball Drive Between The Middle And The Attack',
      frName: 'Conduite de balle réussie milieu attaque',
      engName: 'Successfull Ball Drive Between The Middle And The Attack',
      frDesc: 'conduite de balle réussie d\'un joueur entre la ligne du milieu et la ligne d\'attaque',
      engDesc: 'successuf ball drive of a player under pressure between the middle line et the attack line',
      cellFilter: 'toPercentOnly',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '运球??比',
      chDesc: '运球??比'
  },{
      field: 'at_header',
      displayName: 'Header In Attack',
      frName: 'têtes attaque',
      engName: 'Header In Attack',
      frDesc: 'tête d\'un joueur en situation d\'attaque',
      engDesc: 'header of a player in attack',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '头球',
      chDesc: '头球'
  },{
      field: 'at_header_rate',
      displayName: 'Successful Headerin Attack',
      frName: 'têtes réussies attaque',
      engName: 'Successful Headerin Attack',
      frDesc: 'tête d\'un joueur réussie en situation d\'attaque',
      engDesc: 'successful header of a player in attack',
      cellFilter: 'toPercentOnly',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '头球比',
      chDesc: '头球比'
  },{
      field: 'def_header',
      displayName: 'Header In Defense',
      frName: 'tête défense',
      engName: 'Header In Defense',
      frDesc: 'tête d\'un joueur en situation de défense',
      engDesc: 'header of a player in defense',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '头球防守',
      chDesc: '头球防守'
  },{
      field: 'foul_contact',
      displayName: 'Foul Contact',
      frName: 'Faute',
      engName: 'Foul Contact',
      frDesc: 'faute d\'un joueur sur un autre joueur de l\'équipe adversaire',
      engDesc: 'foul contact of a player on an opponent player',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '犯规联系',
      chDesc: '犯规联系'
  },{
      field: 'foul_offside',
      displayName: 'Foul Offside',
      frName: 'Hors Jeu',
      engName: 'Foul Offside',
      frDesc: 'un joueur se trouve en position de hors jeu si, au moment où le ballon est joué par un coéquipier, il est hors de sa moitié de terrain et que n\'importe quelle partie de sa tête, de son corps ou de ses jambes est plus près de la ligne de but adverse que le ballon et l\'avant dernier adversaire',
      engDesc: 'a player is in an offside position if he is in the opposing team\'s half of the field and is also "nearer to his opponents\' goal line than both the ball and the second-last opponent. being "nearer to an opponent\'s goal line" meant that "any part of his head, body or feet is nearer to his opponents\' goal line than both the ball and the second-last opponent',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '越位',
      chDesc: '越位'
  },{
      field: 'avg_bv_x',
      displayName: 'Average Position  Height',
      frName: 'Position Moyenne Terrain Hauteur',
      engName: 'Average Position  Height',
      frDesc: 'position moyenne d\'un joueur sur le terrain en hauteur',
      engDesc: 'height position on the pitch',
      cellFilter: 'toNumber',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '平均？X',
      chDesc: '平均？X'
  },{
      field: 'avg_bv_y',
      displayName: 'Average Position  Width',
      frName: 'position moyenne largeur ',
      engName: 'Average Position  Width',
      frDesc: 'position moyenne d\'un joueur sur le terrain en largeur ',
      engDesc: 'width position on the pitch',
      cellFilter: 'toNumber',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '平均？Y',
      chDesc: '平均？Y'
  },{
      field: 'avg_bv_attack_x',
      displayName: 'Average Position  Height In Attack',
      frName: 'position moyenne hauteur attaque',
      engName: 'Average Position  Height In Attack',
      frDesc: 'position moyenne d\'un joueur sur le terrain en hauteur en attaque',
      engDesc: 'height position on the pitch in attack',
      cellFilter: 'toNumber',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '平均？X',
      chDesc: '平均？X'
  },{
      field: 'avg_bv_attack_y',
      displayName: 'Average Position  Widht In Attack',
      frName: 'position moyenne largeur attaque',
      engName: 'Average Position  Widht In Attack',
      frDesc: 'position moyenne d\'un joueur sur le terrain en largeur en attaque',
      engDesc: 'width position on the pitch in attack',
      cellFilter: 'toNumber',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '平均？进攻Y',
      chDesc: '平均？进攻Y'
  },{
      field: 'avg_bv_defense_x',
      displayName: 'Average Position  Height In Defense',
      frName: 'position moyenne hauteur défense',
      engName: 'Average Position  Height In Defense',
      frDesc: 'position moyenne d\'un joueur sur le terrain en hauteur en défense',
      engDesc: 'height position on the pitch in defense',
      cellFilter: 'toNumber',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '平均？防守X',
      chDesc: '平均？防守X'
  },{
      field: 'avg_bv_defense_y',
      displayName: 'Average Position  Widht In Defense',
      frName: 'position moyenne joueur largeur défense',
      engName: 'Average Position  Widht In Defense',
      frDesc: 'position moyenne d\'un joueur sur le terrain en largeur en défense',
      engDesc: 'width position on the pitch in defense',
      cellFilter: 'toNumber',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '平均？防守Y',
      chDesc: '平均？防守Y'
  },{
      field: 'n_opp_on_press_avg',
      displayName: 'Number Of Pressing Against The Player',
      frName: 'Nb pressing subit',
      engName: 'Number Of Pressing Against The Player',
      frDesc: 'nombre de pressing subit par un joueur par un joueur de l\'équipe adversaire',
      engDesc: 'number of pressing on the player',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '推人次数',
      chDesc: '推人次数'
  }, {
      field: 'bd_dist_without_pressure',
      displayName: 'Ball Drive Distance Made Without Pressure',
      frName: 'Distance parcourue sans pressing',
      engName: 'Ball Drive Distance Made Without Pressure',
      frDesc: 'distance parcourue par un joueur sans pressing',
      engDesc: 'ball drive made by a player without pressure of the opponents',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '防守运球',
      chDesc: '防守运球'
  }];
    
   
    var colsTeamBd = [{
      field: 'game_id',
      displayName: 'Game Id',
      frName: 'Identifiant Match',
      engName: 'Game Id',
      frDesc: 'Identifiant du match',
      engDesc: 'game identity',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      chName: '比赛序号',
      chDesc: '比赛序号'
  },{
      field: 'halftime',
      displayName: 'Halftime',
      frName: 'Mi Temps',
      engName: 'Halftime',
      frDesc: 'match décomposé en plusieurs parties : 6: match complet - 1:1ère mi temps - 2: 2ème mi temps',
      engDesc: 'game is making up through different parts : 6 whole game - 1: 1st half - 2: 2nd half',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      chName: '比赛构成:1 上半场 2 下半场',
      chDesc: '比赛构成:1 上半场 2 下半场'
  },{
      field: 'team_id',
      displayName: 'Team Id',
      frName: 'Identifiant Équipe',
      engName: 'Team Id',
      frDesc: 'identifiant de l\'équipe',
      engDesc: 'identity of the team',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      chName: '球队序号',
      chDesc: '球队序号'
  },{
      field: 'team_id',
      displayName: 'Team Name',
      frName: 'Nom Équipe',
      engName: 'Team Name',
      frDesc: 'nom de l\'équipe',
      engDesc: 'identity of the team',
      cellFilter: 'teamIdToName',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      chName: '球队名称',
      chDesc: '球队名称'
  },{
      field: 'game_id',
      displayName: 'Game Title',
      frName: 'identifiant Match',
      engName: 'Game Title',
      frDesc: 'identifiant du match',
      engDesc: 'game identity',
      cellFilter: 'gameIdToName',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      chName: '比赛标题',
      chDesc: '比赛标题'
  },{
      field: 'goals',
      displayName: 'Goals',
      frName: 'buts',
      engName: 'Goals',
      frDesc: 'buts marqués par une équipe',
      engDesc: 'goals scored by a team',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '进球数',
      chDesc: '进球数'
  },{
      field: 'shots',
      displayName: 'Shots',
      frName: 'tirs',
      engName: 'Shots',
      frDesc: 'tirs effectués par une équipe',
      engDesc: 'shots made by a team',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '射门数',
      chDesc: '射门数'
  },{
      field: 'shots_ot',
      displayName: 'Shots On Target',
      frName: 'Tirs Cadrés',
      engName: 'Shots On Target',
      frDesc: 'tirs ou frappes avec une trajectoire vers l\'intérieur du but',
      engDesc: 'shots in direction to the goal',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '直接射门数',
      chDesc: '直接射门数'
  },{
      field: 'ncross',
      displayName: 'Nbcross',
      frName: 'Centres',
      engName: 'Nbcross',
      frDesc: 'envoyer le ballon dans la surface de réparation depuis les côtés',
      engDesc: 'send the ball into the penalty area from the sides',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '传球数',
      chDesc: '传球数'
  },{
      field: 'cross_rate',
      displayName: 'Successful Cross ',
      frName: 'Centres Réussis',
      engName: 'Successful Cross ',
      frDesc: 'envoyer le ballon dans la surface de réparation depuis les côtés avec un partenaire qui le récupère',
      engDesc: 'send the ball into the penalty area from the sides with a partner who gets it',
      cellFilter: 'toPercentOnly',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '传球成功率',
      chDesc: '传球成功率'
  },{
      field: 'pass',
      displayName: 'Pass',
      frName: 'Passes',
      engName: 'Pass',
      frDesc: 'envoyer le ballon à un coéquipier',
      engDesc: 'send the ball to a team-mate',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '过人次数',
      chDesc: '过人次数'
  },{
      field: 'pass_rate',
      displayName: 'Pass-Rate',
      frName: 'Passes Réussies',
      engName: 'Pass-Rate',
      frDesc: 'envoyer le ballon a un coéquipier et que celui-ci le récupère',
      engDesc: 'send the ball to a team-mate and the team-mate gets it',
      cellFilter: 'toPercentOnly',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '过人成功率',
      chDesc: '过人成功率'
  },{
      field: 'fwd_pass',
      displayName: 'Pass Forward',
      frName: 'Passes Vers l\'avant',
      engName: 'Pass Forward',
      frDesc: 'envoyer le ballon à un coéquipier vers l\'avant',
      engDesc: 'send the ball forward to a team-mate',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '直接传球',
      chDesc: '直接传球'
  },{
      field: 'fwd_pass_rate',
      displayName: 'Successful Pass Forward',
      frName: 'Passes Vers l\'avant Réussies',
      engName: 'Successful Pass Forward',
      frDesc: 'envoyer le ballon à un coéquipier vers l\'avant et que celui-ci le récupère',
      engDesc: 'send the ball forward to a team-mate and the team-mate gets it',
      cellFilter: 'toPercentOnly',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '直接传球成功率',
      chDesc: '直接传球成功率'
  },{
      field: 'pass_pressure',
      displayName: 'Passe_Pressure',
      frName: 'Passes Sous Pression Défensive',
      engName: 'Passe_Pressure',
      frDesc: 'envoyer le ballon à un coéquipier sous pression défensive d\'un adversaire à moins de 2 m',
      engDesc: 'under pressure, send the ball to a team-mate with an opponent at less than 2m',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '紧逼下传球',
      chDesc: '在对方球员紧逼防守下，选择传球'
  },{
      field: 'pass_pressure_rate',
      displayName: 'Successful Pass Under Pressure ',
      frName: 'Passes Sous Pression Réussies',
      engName: 'Successful Pass Under Pressure ',
      frDesc: 'envoyer le ballon à un coéquipier sous pression défensive d\'un adversaire à moins de 2 m et que le coéquipier le récupère',
      engDesc: 'under pressure, send the ball to a team-mate with an opponent at less than 2m and the team-mate gets it',
      cellFilter: 'toPercentOnly',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '紧逼下传球成功率',
      chDesc: '在对方球员紧逼防守下，传球成功率'
  },{
      field: 'ball_drive',
      displayName: 'Ball Drive',
      frName: 'Conduite De Balle',
      engName: 'Ball Drive',
      frDesc: 'conduite de balle d\'un joueur',
      engDesc: 'ball drive of a player',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '运球',
      chDesc: '球员的运球次数'
  },{
      field: 'ball_drive_rate',
      displayName: 'Successful Ball Drive',
      frName: 'Conduite De Balle Réussie',
      engName: 'Successful Ball Drive',
      frDesc: 'conduite de balle d\'un joueur sans perte du ballon',
      engDesc: 'ball drive of a player without loosing the ball',
      cellFilter: 'toPercentOnly',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '运球率成功率',
      chDesc: '运球而不被对方球员抢断'
  },{
      field: 'header',
      displayName: 'Header',
      frName: 'Têtes',
      engName: 'Header',
      frDesc: 'reprise du ballon par un joueur de la tête',
      engDesc: 'ball touched by a player with his head',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '头球',
      chDesc: '用头部触球'
  },{
      field: 'header_rate',
      displayName: 'Successful Header',
      frName: 'Têtes Réussies',
      engName: 'Successful Header',
      frDesc: 'reprise du ballon par un joueur de la tête avec succès',
      engDesc: 'successful ball touched by a player with his head',
      cellFilter: 'toPercentOnly',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '头球成功率',
      chDesc: '头球成功率'
  },{
      field: 'interception',
      displayName: 'Interception',
      frName: 'Interceptions',
      engName: 'Interception',
      frDesc: 'interception du ballon par un joueur après une passe, un centre, un tir, une tête ou une touche de l\'équipe adversaire',
      engDesc: 'interception of the ball by a player after a pass, a cross, a shot, an head or a throw in of the away team',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '拦截',
      chDesc: '防守球员接到进攻方的传球'
  },{
      field: 'ball_pressure',
      displayName: 'Pressing Sur Le Porteur Du Ballon',
      frName: 'Pressing Porteur Ballon',
      engName: 'Pressure On The Player With The Ball',
      frDesc: 'pressing de l\'équipe adversaire sur le porteur du ballon',
      engDesc: 'pressure of the away team on the player with the ball',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '对球的防守',
      chDesc: '对运球球员的防守 '
  },{
      field: 'indirect_intercep',
      displayName: 'Pressure Which Create A Failed Pass',
      frName: 'Pressing Passe Ratée',
      engName: 'Pressure Which Create A Failed Pass',
      frDesc: 'pressing de l\'équipe adversaire sur le porteur du ballon qui conduit a une passe raté de celui-ci',
      engDesc: 'pressure of the away team on the player with the ball where the player with the ball loose it',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '传球失败',
      chDesc: ' 因对方球员的防守，导致传球失败'
  },{
      field: 'ball_press_back_pass',
      displayName: 'Pressing Which Leads A Pass Backward',
      frName: 'Pressing Passe Vers l\'arrière',
      engName: 'Pressing Which Leads A Pass Backward',
      frDesc: 'pressing de l\'équipe adversaire sur le porteur du ballon qui conduit a une passe vers l\'arrière de celui-ci',
      engDesc: 'pressure of the away team on the player with the ball where the player make a pass backward',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '防守传球',
      chDesc: '因对方球员的防守，被迫选择传球'
  },{
      field: 'speed',
      displayName: 'Speed',
      frName: 'Vitesse',
      engName: 'Speed',
      frDesc: 'vitesse de l\'équipe',
      engDesc: 'speed of the team',
      cellFilter: 'toSpeed',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '球队速度',
      chDesc: '球队的平均速度'
  },{
      field: 'speed_std_dev',
      displayName: 'Speed Standard Deviation',
      frName: 'Vitesse Ecart Type',
      engName: 'Speed Standard Deviation',
      frDesc: 'dispersion écart type de la vitesse',
      engDesc: 'speed standard deviation',
      cellFilter: 'toSpeed',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '速度标准差',
      chDesc: '速度标准差'
  },{
      field: 'goal_dist_avg',
      displayName: 'Goal Distance Average',
      frName: 'Distance Moyenne But',
      engName: 'Goal Distance Average',
      frDesc: 'distance moyenne du joueur de l\'équipe du but adversaire',
      engDesc: 'average distance to opponent goal',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '球员距离对方球门的距离',
      chDesc: '球员距离对方球门的距离'
  },{
      field: 'goal_dist_avg_tavg',
      displayName: 'Goal Distance Average Team',
      frName: 'Distance Moyenne l\'équipe But',
      engName: 'Goal Distance Average Team',
      frDesc: 'distance moyenne de l\'équipe du but adversaire',
      engDesc: 'team average distance to opponent goal',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '球队所有球员距离对方球门的平均距离',
      chDesc: '球队所有球员距离对方球门的平均距离'
  },{
      field: 'tm_dist_min_tavg_attack',
      displayName: 'Distance Team-Mates Attack',
      frName: 'Distance Proche Coéquipier Attaque',
      engName: 'Distance Team-Mates Attack',
      frDesc: 'distance au plus proche coéquipier en situation d\'attaque',
      engDesc: 'distance to the nearest team-mate during attack',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '进攻时最近队友的距离',
      chDesc: '球员发起进攻时，最近一位队友的距离'
  },{
      field: 'opp_dist_min_tavg_defense',
      displayName: 'Distance Opponent Defense',
      frName: 'Distance Marquage Proche Défense',
      engName: 'Distance Opponent Defense',
      frDesc: 'distance de marquage au plus proche adversaire en situation de défense',
      engDesc: 'distance to the nearest opponent during the defense time',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '防守距离',
      chDesc: '防守时，与对方球员的最近距离'
  },{
      field: 'sprint_rate',
      displayName: 'Sprint Rate',
      frName: 'Temps Sprint',
      engName: 'Sprint Rate',
      frDesc: 'pourcentage de temps en sprint',
      engDesc: 'time of the team in sprint',
      cellFilter: 'toPercent',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '球队冲刺时间',
      chDesc: '球队在冲刺状态下的时间'
  },{
      field: 'walk_rate',
      displayName: 'Walk Rate',
      frName: 'Temps Marche',
      engName: 'Walk Rate',
      frDesc: 'pourcentage de temps en marche',
      engDesc: 'time of the team in walk',
      cellFilter: 'toPercent',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '球队走路的时间',
      chDesc: '球队在走路状态下的时间'
  },{
      field: 'walk_rate_attack',
      displayName: 'Walk Rate Attack',
      frName: 'Temps Marche Attaque',
      engName: 'Walk Rate Attack',
      frDesc: 'pourcentage de temps en marche en attaque',
      engDesc: 'time of the team in walk in attack',
      cellFilter: 'toPercent',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '球队走路进攻比',
      chDesc: '球队在走路状态下的时间'
  },{
      field: 'walk_rate_defense',
      displayName: 'Wlak Rate Defense',
      frName: 'Temps Marche Défense',
      engName: 'Wlak Rate Defense',
      frDesc: 'pourcentage de temps en marche en défense',
      engDesc: 'time of the team in walk in defense',
      cellFilter: 'toPercent',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '防守步频',
      chDesc: '球队在防守状态下的步频'
  },{
      field: 'sprint_rate_attack',
      displayName: 'Sprinte Rate Attack',
      frName: 'Temps Sprint Attaque',
      engName: 'Sprinte Rate Attack',
      frDesc: 'pourcentage de temps en sprint en attaque',
      engDesc: 'time of the team in sprint in attack',
      cellFilter: 'toPercent',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '冲刺进攻比',
      chDesc: '球队在冲刺状态下进攻的时间'
  },{
      field: 'sprint_rate_defense',
      displayName: 'Sprint Rate Defense',
      frName: 'Temps Sprint Défense',
      engName: 'Sprint Rate Defense',
      frDesc: 'pourcentage de temps en sprint en défense',
      engDesc: 'time of the team in sprint in defense',
      cellFilter: 'toPercent',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '冲刺防守比',
      chDesc: '球队在冲刺状态下防守的时间'
  },{
      field: 'cum_dist',
      displayName: 'Total Distance',
      frName: 'Distance Totale Parcourue',
      engName: 'Total Distance',
      frDesc: 'distance totale parcourue par l\'équipe',
      engDesc: 'team total distance',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '球员运动距离',
      chDesc: '球队所有球员比赛时的运动距离'
  },{
      field: 'speed_attack',
      displayName: 'Speed Attack',
      frName: 'Vitesse Moyenne Attaque',
      engName: 'Speed Attack',
      frDesc: 'vitesse moyenne en attaque pour une équipe',
      engDesc: 'average speed in attack by a team',
      cellFilter: 'toSpeed',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '进攻速度',
      chDesc: '进攻时，整个球队的速度'
  },{
      field: 'cum_dist_attack',
      displayName: 'Total Distance Made Per Attack',
      frName: 'Distance Totale Parcourue Attaque',
      engName: 'Total Distance Made Per Attack',
      frDesc: 'distance total parcourue en attaque par une équipe',
      engDesc: 'average distance made in attack by a team',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '进攻距离',
      chDesc: '球队进攻时的平均移动距离'
  },{
      field: 'speed_defense',
      displayName: 'Speed Defense',
      frName: 'Vitesse Moyenne Défense',
      engName: 'Speed Defense',
      frDesc: 'vitesse moyenne en défense pour une équipe',
      engDesc: 'speed in defense for a team',
      cellFilter: 'toSpeed',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '防守速度',
      chDesc: '球队的防守速度'
  },{
      field: 'cum_dist_defense',
      displayName: 'Total Distance Made In Defense',
      frName: 'Distance Totale Parcourue Défense',
      engName: 'Total Distance Made In Defense',
      frDesc: 'distance totale parcourue en défense par une équipe',
      engDesc: 'average distance made in defense by a team',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '防守距离',
      chDesc: '防守时平均移动距离'
  },{
      field: 'tm_dist_min_tavg',
      displayName: 'Distance To The Nearest Team-Mate',
      frName: 'Distance Proche Coéquipier',
      engName: 'Distance To The Nearest Team-Mate',
      frDesc: 'distance moyenne au plus proche coéquipier ',
      engDesc: 'average distance to the nearest team-mate',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '最近队友的距离',
      chDesc: '距离最近的队友的平均距离'
  },{
      field: 'tm_dist_min_tavg_defense',
      displayName: 'Distance To The Nearest Team-Mate In Defense',
      frName: 'Distance Proche Coéquipier Défense',
      engName: 'Distance To The Nearest Team-Mate In Defense',
      frDesc: 'distance moyenne au plus proche coéquipier en situation de défense',
      engDesc: 'average distance to the nearest team-mate during a defense time',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '防守状态下最近队友的距离',
      chDesc: '球队防守状态下最近队友的平均距离'
  },{
      field: 'sl_tm_dist_min_tavg_defense',
      displayName: 'Distance To The Nearest Team-Mate On The Same Line In Defense',
      frName: 'Distance Proche Coéquipier Ligne Défense',
      engName: 'Distance To The Nearest Team-Mate On The Same Line In Defense',
      frDesc: 'distance moyenne au plus proche coéquipier sur la même ligne en défense ',
      engDesc: 'average distance to the nearest teammate on the same line of defense',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '同行防守状态下最近队友的距离',
      chDesc: '球队在同行防守状态下最近队友的平均距离'
  },{
      field: 'sl_tm_dist_min_tavg_attack',
      displayName: 'Distance To The Nearest Team-Mate On The Same Line In Attaque',
      frName: 'Distance Proche Coéquipier Ligne Attaque',
      engName: 'Distance To The Nearest Team-Mate On The Same Line In Attaque',
      frDesc: 'distance moyenne au plus proche coéquipier sur la même ligne en attaque',
      engDesc: 'average distance to the nearest teammate on the same line of attack',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '同行进攻状态下最近队友的距离',
      chDesc: '球队在同行进攻状态下最近队友的平均距离'
  },{
      field: 'sl_tm_dist_min_tavg',
      displayName: 'Distance To The Nearest Team-Mate On The Same Line',
      frName: 'distance coéquipier proche ligne',
      engName: 'Distance To The Nearest Team-Mate On The Same Line',
      frDesc: 'distance moyenne au plus proche coéquipier sur la même ligne',
      engDesc: 'average distance to the nearest teammate on the same line ',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '同行中与队友最近的球员',
      chDesc: '在同行中，与最近队友的平均距离'
  },{
      field: 'opp_dist_min_tavg',
      displayName: 'Opponent Distance',
      frName: 'Distance Marquage',
      engName: 'Opponent Distance',
      frDesc: 'distance moyenne de marquage au plus proche adversaire',
      engDesc: 'average distance of close marking to the nearest opponent',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '对面距离',
      chDesc: '对面距离'
  },{
      field: 'opp_dist_min_tavg_attack',
      displayName: 'Opponent Distance In Attack',
      frName: 'Distance Marquage Attaque',
      engName: 'Opponent Distance In Attack',
      frDesc: 'distance moyenne de marquage au plus proche adversaire en situation d\'attaque',
      engDesc: 'average distance of close marking to the nearest opponent during a attack time',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '进攻中对方球队的距离',
      chDesc: '在进攻时间中，最近的防守球员接近的平均距离'
  },{
      field: 'avg_bv_x',
      displayName: 'Average Position  Height',
      frName: 'position moyenne hauteur',
      engName: 'Average Position  Height',
      frDesc: 'position moyenne sur le terrain en hauteur',
      engDesc: 'height position on the pitch',
      cellFilter: 'toNumber',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '球场的平均长度',
      chDesc: '球场的平均长度'
  },{
      field: 'avg_bv_y',
      displayName: 'Average Position  Width',
      frName: 'Position Largeur ',
      engName: 'Average Position  Width',
      frDesc: 'position moyenne sur le terrain en largeur ',
      engDesc: 'width position on the pitch',
      cellFilter: 'toNumber',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '球场的平均宽度',
      chDesc: '球场的平均宽度'
  },{
      field: 'avg_bv_attack_x',
      displayName: 'Average Position  Height In Attack',
      frName: 'Position Hauteur',
      engName: 'Average Position  Height In Attack',
      frDesc: 'position moyenne sur le terrain en hauteur en attaque',
      engDesc: 'height position on the pitch in attack',
      cellFilter: 'toNumber',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '进攻中平均高度',
      chDesc: '进攻中的平均高度'
  },{
      field: 'avg_bv_attack_y',
      displayName: 'Average Position  Widht In Attack',
      frName: 'Position Largeur Attaque',
      engName: 'Average Position  Widht In Attack',
      frDesc: 'position moyenne sur le terrain en largeur en attaque',
      engDesc: 'width position on the pitch in attack',
      cellFilter: 'toNumber',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '进攻中的平均宽度',
      chDesc: '进攻中的平均宽度'
  },{
      field: 'avg_bv_defense_x',
      displayName: 'Average Position  Height In Defense',
      frName: 'Position Hauteur défense',
      engName: 'Average Position  Height In Defense',
      frDesc: 'position moyenne sur le terrain en hauteur en défense',
      engDesc: 'height position on the pitch in defense',
      cellFilter: 'toNumber',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '防守中的平均长度',
      chDesc: '防守中的平均长度'
  },{
      field: 'avg_bv_defense_y',
      displayName: 'Average Position  Widht In Defense',
      frName: 'position largeur défense',
      engName: 'Average Position  Widht In Defense',
      frDesc: 'position moyenne sur le terrain en largeur en défense',
      engDesc: 'width position on the pitch in defense',
      cellFilter: 'toNumber',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '防守中的平均宽度',
      chDesc: '防守中的平均宽度'
  },{
      field: 'goal_dist_avg_tavg_attack',
      displayName: 'Average Distance To The Goal In Attack',
      frName: 'Distance But Attaque',
      engName: 'Average Distance To The Goal In Attack',
      frDesc: 'distance moyenne l\'équipe au but adversaire en situation d\'attaque',
      engDesc: 'average distance of the team to the away team goal in attack',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '进攻球离球门的距离',
      chDesc: '进攻球离球门的距离'
  },{
      field: 'shot_from_box',
      displayName: 'Shot From Bow',
      frName: 'Tentative But Surface',
      engName: 'Shot From Bow',
      frDesc: 'tirs effectués par une équipe avec une tentative de but depuis la surface',
      engDesc: 'shot made by a team to the goal in the penalty aera',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '角球',
      chDesc: '角球'
  },{
      field: 'shot_from_box_ot',
      displayName: 'Shot From Box On Target',
      frName: 'Tentative tir Cadré Surface',
      engName: 'Shot From Box On Target',
      frDesc: 'tirs ou frappes effectués par une équipe depuis la surface avec une trajectoire vers l\'intérieur du but',
      engDesc: 'shot made by a team in the penalty area in direction to the away goal',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '角球目标',
      chDesc: '角球目标'
  },{
      field: 'shot_pressure',
      displayName: 'Shot Pressure',
      frName: 'Tir Sous Pression',
      engName: 'Shot Pressure',
      frDesc: 'tirs effectués par une équipe sous pression de l\'équipe adversaire',
      engDesc: 'shot made by team under the pressure of the opponent team',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '射门防守',
      chDesc: '射门防守'
  },{
      field: 'ncross_in_thebox',
      displayName: 'Cross In The Box',
      frName: 'Centre Surface',
      engName: 'Cross In The Box',
      frDesc: 'envoyer le ballon dans la surface de réparation depuis les côtés',
      engDesc: 'send the ball into the penalty area from the sides',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '角球',
      chDesc: '角球'
  },{
      field: 'ball_drive_pressure',
      displayName: 'Ball Drive Pressure',
      frName: 'Conduite De Balle Sous Pression',
      engName: 'Ball Drive Pressure',
      frDesc: 'conduite de balle d\'un joueur sous pression de l\'équipe adversaire',
      engDesc: 'ball drive of player under the pressure of the away team',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '运球防守',
      chDesc: '运球防守'
  },{
      field: 'ball_drive_bmd',
      displayName: 'Ball Drive Between Middle And Defense ',
      frName: 'Conduite De Balle Ligne Milieu Défense adverse',
      engName: 'Ball Drive Between Middle And Defense ',
      frDesc: 'conduite de balle d\'un joueur entre la ligne milieu et la ligne de défense adverse',
      engDesc: 'ball drive of a player between the middle line and the defense line',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '防守和中间的运球',
      chDesc: '防守和中间的运球'
  },{
      field: 'ball_drive_pressure_rate',
      displayName: 'Successfull Ball Drive Under Pressure',
      frName: 'conduite de balle réussie sous pression',
      engName: 'Successfull Ball Drive Under Pressure',
      frDesc: 'conduite de balle réussie d\'un joueur sous pression',
      engDesc: 'successful ball drive of a player under pressure',
      cellFilter: 'toPercentOnly',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '防守下运球成功',
      chDesc: '防守下运球成功'
  },{
      field: 'ball_drive_bmd_rate',
      displayName: 'Successfull Ball Drive Between The Middle And The Attack',
      frName: 'Conduite De Balle réussie  Milieu Attaque',
      engName: 'Successfull Ball Drive Between The Middle And The Attack',
      frDesc: 'conduite de balle réussie d\'un joueur entre la ligne du milieu et la ligne d\'attaque',
      engDesc: 'successful ball drive of a player between the middle line and the attack line',
      cellFilter: 'toPercentOnly',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '在进攻和间歇时运球成功',
      chDesc: '在进攻和间歇时运球成功'
  },{
      field: 'at_header',
      displayName: 'Header In Attack',
      frName: 'Tête Attaque',
      engName: 'Header In Attack',
      frDesc: 'tête d\'un joueur en situation d\'attaque',
      engDesc: 'header of a player in attack',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '头球',
      chDesc: '球员进攻时头球的个数'
  },{
      field: 'at_header_rate',
      displayName: 'Successful Header in Attack',
      frName: 'Tête Attaque Réussie',
      engName: 'Successful Header in Attack',
      frDesc: 'tête d\'un joueur réussie en situation d\'attaque',
      engDesc: 'successful header of a player in attack',
      cellFilter: 'toPercentOnly',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '头球成功率',
      chDesc: '球员进攻时头球成功的个数'
  },{
      field: 'def_header',
      displayName: 'Successful Header In Defense',
      frName: 'Tête Défense',
      engName: 'Successful Header In Defense',
      frDesc: 'tête d\'un joueur en situation de défense',
      engDesc: 'header of a player in defense',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '防守头球成功',
      chDesc: '球员进攻时头球成功的个数'
  },{
      field: 'foul_contact',
      displayName: 'Foul Contact',
      frName: 'Faute',
      engName: 'Foul Contact',
      frDesc: 'faute d\'un joueur sur un autre joueur de l\'équipe adversaire',
      engDesc: 'foul contact of a player on an opponent ',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '犯规',
      chDesc: '犯规'
  },{
      field: 'foul_offside',
      displayName: 'Foul Offside',
      frName: 'Hors Jeu',
      engName: 'Foul Offside',
      frDesc: 'un joueur se trouve en position de hors jeu si, au moment où le ballon est joué par un coéquipier, il est hors de sa moitié de terrain et que n\'importe quelle partie de sa tête, de son corps ou de ses jambes est plus près de la ligne de but adverse que le ballon et l\'avant dernier adversaire',
      engDesc: 'a player is in an offside position if he is in the opposing team\'s half of the field and is also "nearer to his opponents\' goal line than both the ball and the second-last opponent. being "nearer to an opponent\'s goal line" meant that "any part of his head, body or feet is nearer to his opponents\' goal line than both the ball and the second-last opponent',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '越位',
      chDesc: '越位'
  },{
      field: 'ball_touched',
      displayName: 'Ball Touched ',
      frName: 'Ballons Touchés',
      engName: 'Ball Touched ',
      frDesc: 'ballons touchés par l\'équipe',
      engDesc: 'ball touched by the team',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '控球率',
      chDesc: '控球率'
  },{
      field: 'pass_dist_avg',
      displayName: 'Pass Distance Average',
      frName: 'Distance Passe Moyenne',
      engName: 'Pass Distance Average',
      frDesc: 'distance de passe moyenne pour une équipe',
      engDesc: 'average distance pass for a team',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '平均过人距离',
      chDesc: '平均过人距离'
  },{
      field: 'pass_dxdist_avg',
      displayName: 'Distance Gained Per Pass',
      frName: 'Distance Gagné Passe',
      engName: 'Distance Gained Per Pass',
      frDesc: 'distance gagné par une équipe grâce aux passes',
      engDesc: 'average distance gained for a team thanks to pass',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '每次过人的推进距离',
      chDesc: '每次过人的推进距离'
  },{
      field: 'pass_pressure_dxdist_avg',
      displayName: 'Distance Gained Per Pass Under Pressure',
      frName: 'Distance Gagné Passe Sous Pression',
      engName: 'Distance Gained Per Pass Under Pressure',
      frDesc: 'distance gagné par une équipe grâce aux passes, en passes sous pression',
      engDesc: 'average distance gained for a team thanks to pass under pressure',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '防守下每次过人的推进距离',
      chDesc: '防守下每次过人的推进距离'
  },{
      field: 'bd_dist_avg',
      displayName: 'Average Distance By Ball Drive',
      frName: 'Distance Moyenne Parcourue Conduite De Balle',
      engName: 'Average Distance By Ball Drive',
      frDesc: 'distance moyenne parcourue en conduite de balle',
      engDesc: 'average distance made in ball drive',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '运球平均距离',
      chDesc: '运球平均距离'
  },{
      field: 'bd_dxdist_avg',
      displayName: 'Average Distance Gained By Ball Drive',
      frName: 'Distance Moyenne Gagné Conduite De Balle',
      engName: 'Average Distance Gained By Ball Drive',
      frDesc: 'distance moyenne gagné par l\'équipe en conduite de balle',
      engDesc: 'average distance gained by the team by a ball drive',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '运球推进平均距离',
      chDesc: '运球推进平均距离'
  },{
      field: 'bd_beat_def_avg',
      displayName: 'Number Of Opponent Eliminate By Ball Drive',
      frName: 'Nb Adversaires Éliminés Conduite De Balle',
      engName: 'Number Of Opponent Eliminate By Ball Drive',
      frDesc: 'nb d\'adversaires éliminés suite à conduite de balle de l\'équipe',
      engDesc: 'number of opponent eliminate after a ball drive',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '运球摆脱防守球员',
      chDesc: '运球摆脱防守球员'
  },{
      field: 'clean_intercp',
      displayName: 'Interception Without Foul',
      frName: 'Interception Sans Faute',
      engName: 'Interception Without Foul',
      frDesc: 'interception d\'un joueur sur un joueur adversaire sans faute',
      engDesc: 'interception by the team on the other team wihout foul',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '无犯规抢断',
      chDesc: '无犯规抢断'
  },{
      field: 'pass_intercep',
      displayName: 'Interception Pass Or Cross',
      frName: 'Interception Passe Centre',
      engName: 'Interception Pass Or Cross',
      frDesc: 'interception d\'une passe ou d\'un centre par un joueur de l\'équipe adverse',
      engDesc: 'interception of a pass or a cross by the team',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '传球或过人抢断',
      chDesc: '传球或过人抢断'
  },{
      field: 'dribl_intercep',
      displayName: 'Interception Dribble',
      frName: 'Interception Dribble',
      engName: 'Interception Dribble',
      frDesc: 'interception d\'un dribble par un joueur de l\'équipe adverse',
      engDesc: 'interception by a player after a dribble of an opponent',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '运球抢断',
      chDesc: '运球抢断'
  },{
      field: 'foul',
      displayName: 'Foul',
      frName: 'Fautes',
      engName: 'Foul',
      frDesc: 'fautes pour contestation',
      engDesc: 'foul by contestation',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '犯规',
      chDesc: '犯规'
  },{
      field: 'shot_pressure_ot',
      displayName: 'Shot On The Target Under Pressure',
      frName: 'Tirs Sous Pression Cadrés',
      engName: 'Shot On The Target Under Pressure',
      frDesc: 'tirs ou frappes sous pression avec une trajectoire vers l\'intérieur du but',
      engDesc: 'shot on target under pressure',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '防守射门',
      chDesc: '防守射门'
  },{
      field: 'n_opp_on_press_avg_a',
      displayName: 'Number Of Pressing Against The Team',
      frName: 'Nb Pressing Subit',
      engName: 'Number Of Pressing Against The Team',
      frDesc: 'nombre de pressing subit par l\'équipe par l\'équipe adverse',
      engDesc: 'number of pressing on the team ',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '对球队防守的次数',
      chDesc: '对球队防守的次数'
  },{
      field: 'bd_dist_without_pressure_a',
      displayName: 'Distance Made Between Without Pressing',
      frName: 'Distance Parcourue Sans Pressing',
      engName: 'Distance Made Between Without Pressing',
      frDesc: 'distance parcourue par l\'équipe avec le ballon sans pression',
      engDesc: 'ball drive distance without pressure',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '无防守推进距离',
      chDesc: '无防守推进距离'
  },{
      field: 'n_opp_on_press_avg_d',
      displayName: 'Number Of Pressing Made',
      frName: 'Nb Pressing Effectué',
      engName: 'Number Of Pressing Made',
      frDesc: 'nombre de pressing effectué par l\'équipe',
      engDesc: 'number of pressing made by the team',
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: numberAggreg,
      chName: '防守次数',
      chDesc: '防守次数'
  },{
      field: 'bd_dist_without_pressure_d',
      displayName: 'Distance Made By The Opponent Between Two Pressing',
      frName: 'Distance Parcoure Adversaire Pressing',
      engName: 'Distance Made By The Opponent Between Two Pressing',
      frDesc: 'distance parcourue par l\'adveraire sans pressing',
      engDesc: 'distance made by the away team without pressure',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '两次防守的推进距离',
      chDesc: '两次防守的推进距离'
  },{
      field: 'ball_recovery_avg_height_m',
      displayName: 'Ball Recovery Average Height',
      frName: 'Hauteur Moyenne Récupération Ballon',
      engName: 'Ball Recovery Average Height',
      frDesc: 'hauteur moyenne de récupération du ballon par l\'équipe',
      engDesc: 'average height  of the recovery of the ball by the team',
      cellFilter: 'toNumber',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '球恢复的平均高度',
      chDesc: '球恢复的平均高度'
  },{
      field: 'ball_recovery_avg_duration_sec',
      displayName: 'Ball Recovery Average Duration Seconde',
      frName: 'Temps Récupération Ballon',
      engName: 'Ball Recovery Average Duration Seconde',
      frDesc: 'temps moyen de récupération du ballon par l\'équipe',
      engDesc: 'average time of the recovery of the ball by the team',
      cellFilter: 'toSecond',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '球恢复的秒数',
      chDesc: '球恢复的秒数'
  },{
      field: 'seq_avg_x_ball_loss',
      displayName: 'Height Average Ball Loss',
      frName: 'Hauteur Perte Ballon',
      engName: 'Height Average Ball Loss',
      frDesc: 'hauteur moyenne de perte de balle par l\'équipe',
      engDesc: 'average height  of the loose of the ball by the team',
      cellFilter: 'toNumber',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '平均失球高度',
      chDesc: '平均失球高度'
  },{
      field: 'seq_avg_duration_sec',
      displayName: 'Average Duration Seconde Possession',
      frName: 'Durée Moyenne Possession',
      engName: 'Average Duration Seconde Possession',
      frDesc: 'durée moyenne de possession du ballon par l\'équipe',
      engDesc: 'average possession of the ball by the team',
      cellFilter: 'toSecond',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '控球平均秒数',
      chDesc: '控球平均秒数'
  },{
      field: 'seq_avg_dist_gained',
      displayName: 'Average Distance Gained',
      frName: 'Distance Gagnée Séquence Possession',
      engName: 'Average Distance Gained',
      frDesc: 'distance moyenne gagnée par l\'équipe par séquence de possession de ballon',
      engDesc: 'average distance gained by the team by ball drive',
      cellFilter: 'toDistance',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '平均推进距离',
      chDesc: '平均推进距离'
  }, {
      field: 'pct_dangerous_seq',
      displayName: 'Dangerous Possession',
      frName: 'Pourcentage Possession Occasion Dangereuse',
      engName: 'Dangerous Possession',
      frDesc: 'séquence de possession de ballon par l\'équipe qui conduit à une occasion dangereuse sur le but adverse',
      engDesc: 'ball possession sequence by the team which create a dangerous occasion ',
      cellFilter: 'toPercentOnly',
      filterCellFiltered: true,
      sortCellFiltered: true,
      width: 100,
      filter: {
          condition: customFilterCondition
      },
      treeAggregationType: 'avg',
      customTreeAggregationFinalizerFn: rowValueAggregation,
      chName: '危险的控球',
      chDesc: '危险的控球'
  }];


    for (var variable in colsPlayerBd) {
        getDisplayName(colsPlayerBd[variable]);
    }

    for (var variable in colsTeamBd) {
        getDisplayName(colsTeamBd[variable]);
    }

    allColumnsDef[eStatSubWinType.playerBd] = colsPlayerBd;
    allColumnsDef[eStatSubWinType.teamBd] = colsTeamBd;

    return allColumnsDef;

}

function getDisplayName(obj) {
    switch (localStorage.getItem("websiteLanguage")) {
        case "English":
            if (obj.displayName) {
                obj.displayName = capitalizeFirstLetter(obj.engName);
            }

            obj.headerTooltip = capitalizeFirstLetter(obj.engDesc);
            break;
        case "Français":
            if (obj.displayName) {
                obj.displayName = capitalizeFirstLetter(obj.frName);
            }
            obj.headerTooltip = capitalizeFirstLetter(obj.frDesc);
            break;
        case "简体中文":
            if (obj.displayName) {
                obj.displayName = capitalizeFirstLetter(obj.chName);
            }
            obj.headerTooltip = capitalizeFirstLetter(obj.chDesc);
            break;
        default:

    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

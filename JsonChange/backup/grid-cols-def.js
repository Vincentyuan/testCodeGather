/**
 * Created by med on 12/02/2016.
 */

function getColumnsDef() {


    var allColumnsDef = {};
    var colsSeqCore = [{
            field: 'game_id',
            displayName: 'Game Id',
            frName: '',
            engName: 'Game Id',
            frDesc: '',
            engDesc: 'Game Id',
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
            frName: '',
            engName: 'Game Title',
            frDesc: '',
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
            frName: '',
            engName: 'Half Time',
            frDesc: '',
            engDesc: 'Half Time',
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
            frName: '',
            engName: 'Sequence id',
            frDesc: '',
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
            frName: '',
            engName: 'Start',
            frDesc: '',
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
            frName: '',
            engName: 'End',
            frDesc: '',
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
            frName: '',
            engName: 'Attacking Team Id',
            frDesc: '',
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
            frName: '',
            engName: 'Attacking Team ',
            frDesc: '',
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
            frName: '',
            engName: 'Start X Area Id',
            frDesc: '',
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
            frName: '',
            engName: 'End X Aarea Id',
            frDesc: '',
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
            frName: '',
            engName: 'Start Y Area Id',
            frDesc: '',
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
            frName: '',
            engName: 'End Y Area Id',
            frDesc: '',
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
            frName: '',
            engName: 'Start X Area',
            frDesc: '',
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
            frName: '',
            engName: 'End X Area',
            frDesc: '',
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
            frName: '',
            engName: 'Start Y Area',
            frDesc: '',
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
            frName: '',
            engName: 'End Y Area',
            frDesc: '',
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
            frName: '',
            engName: 'Start X',
            frDesc: '',
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
            frName: '',
            engName: 'Start Y',
            frDesc: '',
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
            frName: '',
            engName: 'End X',
            frDesc: '',
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
            frName: '',
            engName: 'End Y',
            frDesc: '',
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
            frName: '',
            engName: 'Duration',
            frDesc: '',
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
            frName: '',
            engName: 'Is Playing',
            frDesc: '',
            engDesc: 'Is Playing',
            chName: '正在比赛',
            chDesc: '正在比赛',
            width: '80',
            cellClass: sequenceCellClass
        }
    ];

    var colsSeqExtra = [{
            displayName: 'Defending Team Id',
            field: 'def_team_id',
            frName: '',
            engName: 'Defending Team Id',
            frDesc: '',
            engDesc: 'Defending Team Id',
            chName: '防守球队序号',
            chDesc: '防守球队序号',
            visible: false,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //cellFilter: 'teamIdToName',
        {
            displayName: 'Defending Team',
            field: 'def_team_id',
            frName: '',
            engName: 'Defending Team ',
            frDesc: '',
            engDesc: 'Defending Team ',
            chName: '防守球队',
            chDesc: '防守球队',
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
            displayName: 'Action Type Id',
            field: 'game_context_id',
            frName: '',
            engName: 'Action Type Id',
            frDesc: '',
            engDesc: 'Action Type Id',
            chName: '活动类型序号',
            chDesc: '活动类型序号',
            filterData: eFilterData.gameContext,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //5
        {
            displayName: 'Action Type',
            field: 'game_context_id',
            frName: '',
            engName: 'Action Type',
            frDesc: '',
            engDesc: 'Action Type',
            chName: '活动类型',
            chDesc: '活动类型',
            filterCellFiltered: true,
            sortCellFiltered: true,
            cellFilter: 'gameContextIdToName',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //5

        {
            displayName: 'Start Type Id',
            field: 'start_event_type_id',
            frName: '',
            engName: 'Start Type Id',
            frDesc: '',
            engDesc: 'Start Type Id',
            chName: '开始类型序号',
            chDesc: '开始类型序号',
            filterData: eFilterData.startEvent,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //8
        {
            displayName: 'Start Type',
            field: 'start_event_type_id',
            frName: '',
            engName: 'Start Type',
            frDesc: '',
            engDesc: 'Start Type',
            chName: '开始类型',
            chDesc: '开始类型',
            cellFilter: 'startEventIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //8

        {
            displayName: '#Passes',
            field: 'nb_pass',
            frName: '',
            engName: '#Passes',
            frDesc: '',
            engDesc: '#Passes',
            chName: '过人',
            chDesc: '过人',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, //9
        {
            displayName: '#Shots',
            field: 'nb_shot',
            frName: '',
            engName: '#Shots',
            frDesc: '',
            engDesc: '#Shots',
            chName: '射门',
            chDesc: '射门',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, //9
        {
            displayName: '#Crosses',
            field: 'nb_cross',
            frName: '',
            engName: '#Crosses',
            frDesc: '',
            engDesc: '#Crosses',
            chName: '传球',
            chDesc: '传球',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, //9
        {
            displayName: '#Ball Drives in Box',
            field: 'nb_cross',
            frName: '',
            engName: '#Ball Drives in Box',
            frDesc: '',
            engDesc: '#Ball Drives in Box',
            chName: '角球开球',
            chDesc: '角球开球',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, //9
        {
            field: 'is_ball_recovered',
            displayName: 'Is Ball Recovered',
            frName: '',
            engName: 'Is Ball Recovered',
            frDesc: '',
            engDesc: 'Is Ball Recovered',
            chName: '球是否恢复',
            chDesc: '球是否恢复',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, //9
        {
            displayName: 'Ball Recovery Time',
            field: 'time_to_recover_sec',
            frName: '',
            engName: 'Ball Recovery Time',
            frDesc: '',
            engDesc: 'Ball Recovery Time',
            chName: '球恢复时间',
            chDesc: '球恢复时间',
            width: 100,
            cellFilter: 'toSecond',
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, //9
        {
            displayName: 'Ball Recovery Line',
            field: 'ball_recovery_height_m',
            frName: '',
            engName: 'Ball Recovery Line',
            frDesc: '',
            engDesc: 'Ball Recovery Line',
            chName: '球恢复行',
            chDesc: '球恢复行',
            width: 100,
            cellFilter: 'toDistance',
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, //9

        {
            displayName: 'Outcome Id',
            field: 'outcome_event_type_id',
            frName: '',
            engName: 'Outcome Id',
            frDesc: '',
            engDesc: 'Outcome Id',
            chName: '到来序列',
            chDesc: '到来序列',
            filterData: eFilterData.endEvent,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //10
        {
            displayName: 'Outcome',
            field: 'outcome_event_type_id',
            frName: '',
            engName: 'Outcome ',
            frDesc: '',
            engDesc: 'Outcome ',
            chName: '到来',
            chDesc: '到来',
            cellFilter: 'endEventIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //10

        {
            displayName: 'Best Attack X Area Id',
            field: 'best_pitch_area_x',
            frName: '',
            engName: 'Best Attack X Area Id ',
            frDesc: '',
            engDesc: 'Best Attack X Area Id ',
            chName: '最佳进攻点X序列',
            chDesc: '最佳进攻点X序列',
            filterData: eFilterData.bestAttArea,
            filterCondition: filterBestAreaId,
            width: 160,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Best Attack X Area',
            field: 'best_pitch_area_x',
            frName: '',
            engName: 'Best Attack X Area  ',
            frDesc: '',
            engDesc: 'Best Attack X Area  ',
            chName: '最佳进攻点X',
            chDesc: '最佳进攻点X',
            cellFilter: 'xAreaIdToName',
            width: 160,
            filterCellFiltered: true,
            sortCellFiltered: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        },

        {
            displayName: 'Best Attack Y Area Id',
            field: 'best_pitch_area_y',
            frName: '',
            engName: 'Best Attack Y Area Id ',
            frDesc: '',
            engDesc: 'Best Attack Y Area Id ',
            chName: '最佳进攻点Y序列',
            chDesc: '最佳进攻点Y序列',
            filterData: eFilterData.bestAttArea,
            filterCondition: filterBestAreaId,
            width: 160,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Best Attack Y Area',
            field: 'best_pitch_area_y',
            frName: '',
            engName: 'Best Attack Y Area  ',
            frDesc: '',
            engDesc: 'Best Attack Y Area  ',
            chName: '最佳进攻点Y',
            chDesc: '最佳进攻点Y',
            cellFilter: 'yAreaIdToName',
            width: 160,
            filterCellFiltered: true,
            sortCellFiltered: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        },

        {
            displayName: 'Begin Attack Y Area Id',
            field: 'first_box_area_y',
            frName: '',
            engName: 'Begin Attack Y Area Id ',
            frDesc: '',
            engDesc: 'Begin Attack Y Area Id ',
            chName: '开始进攻点Y序列',
            chDesc: '开始进攻点Y序列',
            filterData: eFilterData.initialAttArea,
            filterCondition: filterBeginAreaId,
            width: 160,
            cellClass: sequenceCellClass,
            visible: false,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Begin Attack Y Area',
            field: 'first_box_area_y',
            frName: '',
            engName: 'Begin Attack Y Area  ',
            frDesc: '',
            engDesc: 'Begin Attack Y Area  ',
            chName: '开始进攻点Y',
            chDesc: '开始进攻点Y',
            cellFilter: 'yAreaIdToName',
            width: 160,
            filterCellFiltered: true,
            sortCellFiltered: true,
            cellClass: sequenceCellClass,
            visible: false,
            filter: {
                condition: customFilterCondition
            }
        }

    ];

    var colsEventCoreExtra = [{
            displayName: 'Id',
            field: 'event_id',
            frName: '',
            engName: 'Id ',
            frDesc: '',
            engDesc: 'Id ',
            chName: '序列',
            chDesc: '序列',
            width: 50,
            pinnedLeft: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //0
        {
            field: 'player_id',
            filterData: eFilterData.player,
            displayName: 'Player Id',
            frName: '',
            engName: 'Player Id ',
            frDesc: '',
            engDesc: 'Player Id ',
            chName: '球员序号',
            chDesc: '球员序号',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Player',
            field: 'player_id',
            frName: '',
            engName: 'Player  ',
            frDesc: '',
            engDesc: 'Player  ',
            chName: '球员',
            chDesc: '球员',
            cellFilter: 'playerIdToName',
            width: 100,
            filterCellFiltered: true,
            sortCellFiltered: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        },

        {
            displayName: 'Duration',
            cellFilter: 'getDuration:this.row.entity',
            field: 'time_duration',
            frName: '',
            engName: 'Duration  ',
            frDesc: '',
            engDesc: 'Duration  ',
            chName: '区间',
            chDesc: '区间',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: '100',
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: secondAggreg
        }, //12
        {
            displayName: 'Distance',
            cellFilter: 'toDistance',
            field: 'dist_m',
            frName: '',
            engName: 'DistanceDistance  ',
            frDesc: '',
            engDesc: 'Distance  ',
            chName: '距离',
            chDesc: '距离',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        },
        //    { displayName: 'event_id', field: 'event_id', width: 100, cellClass: sequenceCellClass , filter: { condition: customFilterCondition}},
        {
            displayName: 'Following Event Id',
            field: 'next_event_type_id',

            frName: '',
            engName: 'Following Event Id  ',
            frDesc: '',
            engDesc: 'Following Event Id  ',
            chName: '后续事件序号',
            chDesc: '后续事件序号',
            filterData: eFilterData.nextEvents,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Following Event',
            field: 'next_event_type_id',
            frName: '',
            engName: 'Following Event   ',
            frDesc: '',
            engDesc: 'Following Event   ',
            chName: '后续事件',
            chDesc: '后续事件',
            filterData: eFilterData.nextEvents,
            cellFilter: 'eventIdToName',
            width: 100,
            filterCellFiltered: true,
            sortCellFiltered: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        },

        {
            displayName: 'Speed kmh',
            cellFilter: 'toSpeed',
            field: 'speed_kmh',
            frName: '',
            engName: 'Speed kmh ',
            frDesc: '',
            engDesc: 'Speed kmh ',
            chName: '速度 kmh',
            chDesc: '速度 kmh',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: 'Success',
            field: 'success_id',
            frName: '',
            engName: 'Success',
            frDesc: '',
            engDesc: 'Success',
            chName: '成功',
            chDesc: '成功',
            filterData: eFilterData.success,
            width: 100,
            filterCellFiltered: true,
            sortCellFiltered: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: percentAggreg
        }, {
            displayName: 'Action Type Id',
            field: 'game_context_id',
            frName: '',
            engName: 'Action Type Id',
            frDesc: '',
            engDesc: 'Action Type Id',
            chName: '活动类型序号',
            chDesc: '活动类型序号',
            filterData: eFilterData.gameContext,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //5
        {
            displayName: 'Action Type',
            field: 'game_context_id',
            frName: '',
            engName: 'Action Type ',
            frDesc: '',
            engDesc: 'Action Type ',
            chName: '活动类型',
            chDesc: '活动类型',
            filterCellFiltered: true,
            sortCellFiltered: true,
            cellFilter: 'gameContextIdToName',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        } //5

    ];

    var colsEventCore = colsEventCoreExtra.concat(colsSeqCore);

    var colShotExtra = [{
            displayName: 'Start Def Id',
            field: 'start_closest_def_id',
            frName: '',
            engName: 'Start Def Id ',
            frDesc: '',
            engDesc: 'Start Def Id',
            chName: '开始定义序号',
            chDesc: '开始定义序号',
            filterData: eFilterData.startDefPlayer,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Start Def',
            field: 'start_closest_def_id',
            frName: '',
            engName: 'Start Def  ',
            frDesc: '',
            engDesc: 'Start Def ',
            chName: '开始定义',
            chDesc: '开始定义',
            cellFilter: 'playerIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Start Def Dist',
            cellFilter: 'toDistance',
            frName: '',
            engName: 'Start Def Dist ',
            frDesc: '',
            engDesc: 'Start Def Dist',
            chName: '开始定义距离',
            chDesc: '开始定义距离',
            field: 'start_closest_def_dist',
            filterData: eFilterData.startMarkingDist,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: '#Start Covering Def.',
            field: 'start_n_covering_def',
            frName: '',
            engName: '#Start Covering Def.',
            frDesc: '',
            engDesc: '#Start Covering Def.',
            chName: '开始覆盖定义',
            chDesc: '开始覆盖定义',
            filterData: eFilterData.startMarkingNbDef,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            displayName: '#Passes Before',
            field: 'n_pass_begin_seq',
            frName: '',
            engName: '#Passes Before',
            frDesc: '',
            engDesc: '#Passes Before',
            chName: '过人之前',
            chDesc: '过人之前',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            displayName: 'Time Before',
            field: 'time_begin_seq_sec',
            frName: '',
            engName: 'Time Before',
            frDesc: '',
            engDesc: 'Time Before',
            chName: '时间之前',
            chDesc: '时间之前',
            cellFilter: 'toSecond',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }


    ];

    var colCrossExtra = [{
            displayName: 'Target Player Id',
            field: 'target_player_id',
            frName: '',
            engName: 'Target Player Id',
            frDesc: '',
            engDesc: 'Target Player Id',
            chName: '目标球员序号',
            chDesc: '目标球员序号',
            filterData: eFilterData.targetPlayer,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Target Player',
            field: 'target_player_id',
            frName: '',
            engName: 'Target Player',
            frDesc: '',
            engDesc: 'Target Player',
            chName: '目标球员',
            chDesc: '目标球员',
            width: 100,
            cellFilter: 'playerIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Start Def',
            field: 'start_closest_def_id',
            frName: '',
            engName: 'Start Def',
            frDesc: '',
            engDesc: 'Start Def',
            chName: '开始定义',
            chDesc: '开始定义',
            cellFilter: 'playerIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Start Def Id',
            field: 'start_closest_def_id',
            frName: '',
            engName: 'Start Def Id',
            frDesc: '',
            engDesc: 'Start Def Id',
            chName: '开始定义序号',
            chDesc: '开始定义序号',
            filterData: eFilterData.startDefPlayer,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Start Def Dist.',
            cellFilter: 'toDistance',
            frName: '',
            engName: 'Start Def Dist',
            frDesc: '',
            engDesc: 'Start Def Dist',
            chName: '开始定义距离',
            chDesc: '开始定义距离',
            field: 'start_closest_def_dist',
            filterData: eFilterData.startMarkingDist,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: 'End Def Id',
            field: 'end_closest_def_id',
            frName: '',
            engName: 'End Def Id',
            frDesc: '',
            engDesc: 'End Def Id',
            chName: '结束定义序号',
            chDesc: '结束定义序号',
            filterData: eFilterData.endDefPlayer,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'End Def',
            field: 'end_closest_def_id',
            frName: '',
            engName: 'End Def ',
            frDesc: '',
            engDesc: 'End Def ',
            chName: '结束定义',
            chDesc: '结束定义',
            cellFilter: 'playerIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'End Def Dist',
            cellFilter: 'toDistance',
            field: 'end_closest_def_dist',
            frName: '',
            engName: 'End Def Dist',
            frDesc: '',
            engDesc: 'End Def Dist',
            chName: '结束定义距离',
            chDesc: '结束定义距离',
            filterData: eFilterData.endMarkingDist,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: '#Start Pass Options',
            field: 'start_n_possible_pass',
            frName: '',
            engName: '#Start Pass Options',
            frDesc: '',
            engDesc: '#Start Pass Options',
            chName: '开始过人的选择',
            chDesc: '开始过人的选择',
            filterData: eFilterData.startNbPassOpt,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        },

        {
            displayName: '#Passes Before',
            field: 'n_pass_begin_seq',
            frName: '',
            engName: '#Passes Before',
            frDesc: '',
            engDesc: '#Passes Before',
            chName: '过人之前',
            chDesc: '过人之前',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            displayName: 'Time Before',
            field: 'time_begin_seq_sec',
            frName: '',
            engName: 'Time Before',
            frDesc: '',
            engDesc: 'Time Before',
            chName: '时间之前',
            chDesc: '时间之前',
            cellFilter: 'toSecond',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: '#Teammates in Box',
            field: 'n_teammates_in_box',
            frName: '',
            engName: '#Teammates in Box',
            frDesc: '',
            engDesc: '#Teammates in Box',
            chName: '在角球的队员',
            chDesc: '在角球的队员',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            displayName: '#Opponents in box',
            field: 'n_opponent_in_box',
            frName: '',
            engName: '#Opponents in Box',
            frDesc: '',
            engDesc: '#Opponents in Box',
            chName: '在角球的对方球队的队员',
            chDesc: '在角球的对方球队的队员',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }

    ];

    var colBallDriveExtra = [{
            cellFilter: 'toDistance',
            field: 'dist_gained_m',
            displayName: 'Distenc Gained',
            frName: '',
            engName: 'Distence Gained',
            frDesc: '',
            engDesc: 'Distance Gained',
            chName: '推进距离',
            chDesc: '推进距离',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: '#Start Covering Def.',
            field: 'start_n_covering_def',
            frName: '',
            engName: '#Start Covering Def.',
            frDesc: '',
            engDesc: '#Start Covering Def.',
            chName: '开始覆盖定义',
            chDesc: '开始覆盖定义',
            filterData: eFilterData.startMarkingNbDef,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            displayName: '#End Covering Def.',
            field: 'end_n_covering_def',
            frName: '',
            engName: '#End Covering Def.',
            frDesc: '',
            engDesc: '#End Covering Def.',
            chName: '结束覆盖定义',
            chDesc: '结束覆盖定义',
            filterData: eFilterData.endMarkingNbDef,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'closest_def_id',
            displayName: 'Closest Defender Id',
            frName: '',
            engName: 'Closest Defender Id',
            frDesc: '',
            engDesc: 'Closest Defender Id',
            chName: '最近防守球员序号',
            chDesc: '最近防守球员序号',
            filterData: eFilterData.closestDefPlayer,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Closest Def',
            field: 'closest_def_id',
            frName: '',
            engName: 'Closest Def',
            frDesc: '',
            engDesc: 'Closest Def',
            chName: '最近定义',
            chDesc: '最近定义',
            cellFilter: 'playerIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Start Bottom Midfield Id',
            field: 'start_op_bot_mid_play_id',
            frName: '',
            engName: 'Start Bottom Midfield Id',
            frDesc: '',
            engDesc: 'Start Bottom Midfield Id',
            chName: '开始底线中区序列',
            chDesc: '开始底线中区序列',
            filterData: eFilterData.startBottomMidField,
            width: 100,
            cellFilter: 'playerIdToName',
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'End Bottom Midfield Id',
            field: 'end_op_bot_mid_play_id',
            frName: '',
            engName: 'End Bottom Midfield Id',
            frDesc: '',
            engDesc: 'End Bottom Midfield Id',
            chName: '结束底线中区序列',
            chDesc: '结束底线中区序列',
            filterData: eFilterData.endBottomMidField,
            width: 100,
            cellFilter: 'playerIdToName',
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Start Bottom Midfield',
            field: 'start_op_bot_mid_play_id',
            frName: '',
            engName: 'Start Bottom Midfield',
            frDesc: '',
            engDesc: 'Start Bottom Midfield',
            chName: '结束底线中区',
            chDesc: '结束底线中区',
            width: 100,
            cellFilter: 'playerIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'End Bottom Midfield',
            field: 'end_op_bot_mid_play_id',
            frName: '',
            engName: 'End Bottom Midfield ',
            frDesc: '',
            engDesc: 'End Bottom Midfield ',
            chName: '结束底线中区',
            chDesc: '结束底线中区',
            width: 100,
            cellFilter: 'playerIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        },

        {
            cellFilter: 'toDistance',
            field: 'closest_def_dist',
            filterData: eFilterData.startMarkingDist,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: 'Start Position Type Id',
            frName: '',
            engName: 'Start Position Type Id ',
            frDesc: '',
            engDesc: 'Start Position Type Id',
            chName: '开始位置类型序列号',
            chDesc: '开始位置类型序列号',
            field: 'start_between_op_midfield_defense',
            filterData: eFilterData.startPosition,
            width: 100,
            cellFilter: 'positionTypeIdToName',
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'End Position Type Id',
            frName: '',
            engName: 'End Position Type Id ',
            frDesc: '',
            engDesc: 'End Position Type Id',
            chName: '结束位置类型序列号',
            chDesc: '结束位置类型序列号',
            field: 'end_between_op_midfield_defense',
            filterData: eFilterData.endPosition,
            width: 100,
            cellFilter: 'positionTypeIdToName',
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Start Position Type',
            frName: '',
            engName: 'Start Position Type  ',
            frDesc: '',
            engDesc: 'Start Position Type ',
            chName: '开始位置类型',
            chDesc: '开始位置类型',
            field: 'start_between_op_midfield_defense',
            width: 100,
            cellFilter: 'positionTypeIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'End Position Type',
            field: 'end_between_op_midfield_defense',
            frName: '',
            engName: 'End Position Type ',
            frDesc: '',
            engDesc: 'End Position Type',
            chName: '结束位置类型',
            chDesc: '结束位置类型',
            width: 100,
            cellFilter: 'positionTypeIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }

        //    { displayName: 'start_off_position', field: 'start_off_position', filterData : eFilterData.XXX, width: 100, cellFilter : 'XXX', cellClass: sequenceCellClass , filter: { condition: customFilterCondition} },
        //    { displayName: 'end_off_position', field: 'end_off_position', filterData : eFilterData.XXX, width: 100, cellFilter : 'XXX', cellClass: sequenceCellClass , filter: { condition: customFilterCondition} }
    ];

    var colPassExtra = [{
            displayName: 'Traget Player Id',
            frName: '',
            engName: 'Traget Player Id ',
            frDesc: '',
            engDesc: 'Traget Player Id',
            chName: '目标球员序列号',
            chDesc: '目标球员序列号',
            field: 'target_player_id',
            filterData: eFilterData.targetPlayer,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Target Player',
            frName: '',
            engName: 'Traget Player  ',
            frDesc: '',
            engDesc: 'Traget Player ',
            chName: '目标球员',
            chDesc: '目标球员',
            field: 'target_player_id',
            cellFilter: 'playerIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        },

        {
            cellFilter: 'toDistance',
            field: 'dist_gained_m',
            displayName: 'Distance Gained',
            frName: '',
            engName: 'Distance Gained',
            frDesc: '',
            engDesc: 'Distance Gained',
            chName: '推进距离',
            chDesc: '推进距离',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: '#Start Covering Def.',
            frName: '',
            engName: '#Start Covering Def.',
            frDesc: '',
            engDesc: '#Start Covering Def.',
            chName: '开始设计定义',
            chDesc: '开始设计定义',
            field: 'start_n_covering_def',
            filterData: eFilterData.startMarkingNbDef,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            displayName: '#End Covering Def.',
            frName: '',
            engName: '#End Covering Def.',
            frDesc: '',
            engDesc: '#End Covering Def.',
            chName: '结束设计定义',
            chDesc: '结束设计定义',
            field: 'end_n_covering_def',
            filterData: eFilterData.endMarkingNbDef,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            displayName: 'Start Def Id',
            frName: '',
            engName: 'Start Def Id',
            frDesc: '',
            engDesc: 'Start Def Id',
            chName: '开始定义序号',
            chDesc: '开始定义序号',
            field: 'start_closest_def_id',
            filterData: eFilterData.startDefPlayer,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Start Def',
            field: 'start_closest_def_id',
            frName: '',
            engName: 'Start Def ',
            frDesc: '',
            engDesc: 'Start Def ',
            chName: '开始定义',
            chDesc: '开始定义',
            cellFilter: 'playerIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Start Def Dist.',
            frName: '',
            engName: 'Start Def Dist',
            frDesc: '',
            engDesc: 'Start Def Dist',
            chName: '开始定义距离',
            chDesc: '开始定义距离',
            cellFilter: 'toDistance',
            field: 'start_closest_def_dist',
            filterData: eFilterData.startMarkingDist,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: 'End Def Id',
            field: 'end_closest_def_id',
            frName: '',
            engName: 'End Def Id',
            frDesc: '',
            engDesc: 'End Def Id',
            chName: '结束定义序号',
            chDesc: '结束定义序号',
            filterData: eFilterData.endDefPlayer,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'End Def',
            field: 'end_closest_def_id',
            frName: '',
            engName: 'End Def ',
            frDesc: '',
            engDesc: 'End Def ',
            chName: '结束定义',
            chDesc: '结束定义',
            cellFilter: 'playerIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'End Def Dist',
            frName: '',
            engName: 'End Def Dist',
            frDesc: '',
            engDesc: 'End Def Dist',
            chName: '结束定义距离',
            chDesc: '结束定义距离',
            cellFilter: 'toDistance',
            field: 'end_closest_def_dist',
            filterData: eFilterData.endMarkingDist,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: '#Start Pass Options',
            field: 'start_n_possible_pass',
            frName: '',
            engName: '#Start Pass Options',
            frDesc: '',
            engDesc: '#Start Pass Options',
            chName: '开始过人选择',
            chDesc: '开始过人选择',
            filterData: eFilterData.startNbPassOpt,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            displayName: '#End Pass Options',
            field: 'end_n_possible_pass',
            frName: '',
            engName: '#End Pass Options',
            frDesc: '',
            engDesc: '#End Pass Options',
            chName: '结束过人选择',
            chDesc: '结束过人选择',
            filterData: eFilterData.endNbPassOpt,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            displayName: 'Pass Angle',
            field: 'angle_degree',
            frName: '',
            engName: 'Pass Angle',
            frDesc: '',
            engDesc: 'Pass Angle',
            chName: '过人角度',
            chDesc: '过人角度',
            width: 100,
            cellFilter: 'getPassAngleValue:this.row.entity',
            filterCellFiltered: true,
            sortCellFiltered: true,
            filterField: getPassAngle,
            filterData: eFilterData.passAngle,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }
    ];

    var colsTackleExtraFromSeqCore = [{
            displayName: 'Id',
            field: 'event_id',
            frName: '',
            engName: 'Id',
            frDesc: '',
            engDesc: 'Id',
            chName: '序号',
            chDesc: '序号',
            width: 50,
            pinnedLeft: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //0
        {
            field: 'player_id',
            displayName: 'Player Id',
            frName: '',
            engName: 'Player Id',
            frDesc: '',
            engDesc: 'Player Id',
            chName: '球员序号',
            chDesc: '球员序号',
            filterData: eFilterData.player,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Player',
            field: 'player_id',
            frName: '',
            engName: 'Player',
            frDesc: '',
            engDesc: 'Player',
            chName: '球员',
            chDesc: '球员',
            width: 100,
            cellFilter: 'playerIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        },

        {
            field: 'team_id',
            displayName: 'Team',
            frName: '',
            engName: 'Team Id',
            frDesc: '',
            engDesc: 'Team Id',
            chName: '球队序号',
            chDesc: '球队序号',
            width: 100,
            filterData: eFilterData.playContext,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Team',
            field: 'team_id',
            frName: '',
            engName: 'Team',
            frDesc: '',
            engDesc: 'Team',
            chName: '球队',
            chDesc: '球队',
            width: 100,
            cellFilter: 'teamIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }

        // { displayName: 'duration', cellFilter: 'getDuration:this.row.entity', field: 'time_duration', width: '100', cellClass: sequenceCellClass, filter: { condition: customFilterCondition}, treeAggregationType: 'avg', customTreeAggregationFinalizerFn: secondAggreg }//12
        // { displayName: 'following_event', field: 'next_event_type_id', filterData: eFilterData.nextEvents, cellFilter: 'eventIdToName', width: 100, cellClass: sequenceCellClass, filter: { condition: customFilterCondition}},
        // { displayName: 'success', field: 'success_id', filterData: eFilterData.success, width: 100, cellClass: sequenceCellClass, filter: { condition: customFilterCondition}, treeAggregationType: 'avg', customTreeAggregationFinalizerFn: percentAggreg },
    ];
    // var colThrowInExtra same as passExtra
    var colsHeaderExtraFromSeqCore = [{
            displayName: 'Id',
            field: 'event_id',
            frName: '',
            engName: 'Id',
            frDesc: '',
            engDesc: 'Id',
            chName: '序号',
            chDesc: '序号',
            width: 50,
            pinnedLeft: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //0
        {
            field: 'player_id',
            displayName: 'Player Id',
            frName: '',
            engName: 'Player Id',
            frDesc: '',
            engDesc: 'Player Id',
            chName: '球员序号',
            chDesc: '球员序号',
            filterData: eFilterData.player,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Player',
            frName: '',
            engName: 'Player',
            frDesc: '',
            engDesc: 'Player',
            chName: '球员',
            chDesc: '球员',
            field: 'player_id',
            width: 100,
            cellFilter: 'playerIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        },

        {
            displayName: 'Previous Event Id',
            field: 'previous_event_type_id',
            frName: '',
            engName: 'Previous Event Id',
            frDesc: '',
            engDesc: 'Previous Event Id',
            chName: '前一个事件序号',
            chDesc: '前一个事件序号',
            filterData: eFilterData.prevEvents,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Previous Event',
            field: 'previous_event_type_id',
            frName: '',
            engName: 'Previous Event ',
            frDesc: '',
            engDesc: 'Previous Event ',
            chName: '前一个事件',
            chDesc: '前一个事件',
            cellFilter: 'eventIdToName',
            width: 100,
            filterCellFiltered: true,
            sortCellFiltered: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            field: 'team_id',
            displayName: 'Team Id',
            frName: '',
            engName: 'Team Id',
            frDesc: '',
            engDesc: 'Team Id',
            chName: '球队序号',
            chDesc: '球队序号',
            width: 100,
            filterData: eFilterData.playContext,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Team',
            frName: '',
            engName: 'Team',
            frDesc: '',
            engDesc: 'Team',
            chName: '球队',
            chDesc: '球队',
            field: 'team_id',
            width: 100,
            cellFilter: 'teamIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }

    ];
    var colsFoulAll = [{
            field: 'game_id',
            displayName: 'Game Id',
            frName: '',
            engName: 'Game Id',
            frDesc: '',
            engDesc: 'Game Id',
            chName: '比赛序号',
            chDesc: '比赛序号',
            filterData: eFilterData.game,
            width: 80,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //1
        {
            displayName: 'Game Title',
            field: 'game_id',
            frName: '',
            engName: 'Game Title',
            frDesc: '',
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
            frName: '',
            engName: 'Half Time',
            frDesc: '',
            engDesc: 'Half Time',
            chName: '半场',
            chDesc: '半场',
            width: 110,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //2
        {
            field: 'sequence_id',
            displayName: 'Sequence Id',
            frName: '',
            engName: 'Sequence Id',
            frDesc: '',
            engDesc: 'Sequence Id',
            chName: '片段序号',
            chDesc: '片段序号',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Id',
            frName: '',
            engName: 'Id',
            frDesc: '',
            engDesc: 'Id',
            chName: '序号',
            chDesc: '序号',
            field: 'event_id',
            width: 50,
            pinnedLeft: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, //0
        {
            displayName: 'Start',
            field: 'frame',
            frName: '',
            engName: 'Start',
            frDesc: '',
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
            field: 'team_id',
            displayName: 'Team Id',
            frName: '',
            engName: ' Team Id',
            frDesc: '',
            engDesc: ' Team Id',
            chName: '球队序号',
            chDesc: '球队序号',
            width: 100,
            filterData: eFilterData.playContext,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Team',
            field: 'team_id',
            frName: '',
            engName: 'Team',
            frDesc: '',
            engDesc: 'Team',
            chName: '球队',
            chDesc: '球队',
            width: 100,
            cellFilter: 'teamIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        },

        {
            displayName: 'Start X Area Id',
            frName: '',
            engName: 'Start X Area Id',
            frDesc: '',
            engDesc: 'Start X Area Id',
            chName: '开始区域X序号',
            chDesc: '开始区域X序号',
            field: 'start_area_x_id',
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
            displayName: 'Start X Area',
            frName: '',
            engName: 'Start X Area ',
            frDesc: '',
            engDesc: 'Start X Area ',
            chName: '开始区域X',
            chDesc: '开始区域X',
            field: 'start_area_x_id',
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
            displayName: 'Start Y Area Id',
            field: 'start_area_y_id',
            frName: '',
            engName: 'Start Y Area Id',
            frDesc: '',
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
            displayName: 'Start Y Area',
            field: 'start_area_y_id',
            frName: '',
            engName: 'Start  Y  Area ',
            frDesc: '',
            engDesc: 'Start  Y Area ',
            chName: '开始区域 Y',
            chDesc: '开始区域 Y',
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
            field: 'start_x',
            displayName: 'Start X',
            frName: '',
            engName: 'Start X ',
            frDesc: '',
            engDesc: 'Start  X ',
            chName: '开始区域 X',
            chDesc: '开始区域 X',
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
            frName: '',
            engName: 'Start Y ',
            frDesc: '',
            engDesc: 'Start  Y ',
            chName: '开始区域 Y',
            chDesc: '开始区域 Y',
            cellFilter: 'toNumber',
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: 'Previous Event Id',
            field: 'previous_event_type_id',
            frName: '',
            engName: 'Previous Event Id ',
            frDesc: '',
            engDesc: 'Previous Event Id',
            chName: '前一个事件序号',
            chDesc: '前一个事件序号',
            filterData: eFilterData.prevEvents,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'previous Event',
            field: 'previous_event_type_id',
            frName: '',
            engName: 'Previous Event  ',
            frDesc: '',
            engDesc: 'Previous Event ',
            chName: '前一个事件',
            chDesc: '前一个事件',
            filterData: eFilterData.prevEvents,
            cellFilter: 'eventIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Foul Cost Id',
            field: 'foul_cost_type_id',
            frName: '',
            engName: 'Foul Cost Id  ',
            frDesc: '',
            engDesc: 'Foul Cost Id ',
            chName: '犯规代价序号',
            chDesc: '犯规代价序号',
            filterData: eFilterData.foulCosts,
            width: 100,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Foul Cost',
            field: 'foul_cost_type_id',
            frName: '',
            engName: 'Foul Cost  ',
            frDesc: '',
            engDesc: 'Foul Cost ',
            chName: '犯规代价',
            chDesc: '犯规代价',
            cellFilter: 'foulCostIdToName',
            width: 100,
            filterCellFiltered: true,
            sortCellFiltered: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        },

        //calculated
        {
            field: 'isPlaying',
            displayName: 'Is　Playing',
            frName: '',
            engName: 'Is　Playing ',
            frDesc: '',
            engDesc: 'Is　Playing ',
            chName: '正在比赛',
            chDesc: '正在比赛',
            width: '80',
            cellClass: sequenceCellClass
        }
    ];


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
    for (var variable in colCrossExtra) {
        getDisplayName(colCrossExtra[variable]);
    }
    for (var variable in colPassExtra) {
        getDisplayName(colPassExtra[variable]);
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

            field: 'nb',
            displayName: '#',
            frName: '',
            engName: '#',
            frDesc: '',
            engDesc: '#',
            chName: '#',
            chDesc: '#',
            width: 80,
            filter: {
                condition: customFilterCondition
            }
        }, {
            field: 'teamId',
            displayName: 'Team Id',
            frName: '',
            engName: 'Team Id',
            frDesc: '',
            engDesc: 'Team Id',
            chName: '球队序号',
            chDesc: '球队序号',
            width: 100,
            filter: {
                condition: customFilterCondition
            }
        }, //cellFilter: 'teamIdToName',
        {
            field: 'playerId',
            displayName: 'Player Id',
            frName: '',
            engName: 'Player Id',
            frDesc: '',
            engDesc: 'Player Id',
            chName: '球员序号',
            chDesc: '球员序号',
            width: 100,
            filter: {
                condition: customFilterCondition
            }
        }, //cellFilter: 'playerIdToName',
        {
            field: 'teamId',
            displayName: 'Team',
            frName: '',
            engName: 'Team',
            frDesc: '',
            engDesc: 'Team ',
            chName: '球队',
            chDesc: '球队',
            width: 100,
            cellFilter: 'teamIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Player',
            field: 'playerId',
            frName: '',
            engName: 'Player',
            frDesc: '',
            engDesc: 'Player ',
            chName: '球员',
            chDesc: '球员',
            width: 100,
            cellFilter: 'playerIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            cellClass: sequenceCellClass,
            filter: {
                condition: customFilterCondition
            }
        }, {
            field: 'success',
            displayName: 'Success',
            frName: '',
            engName: 'Success',
            frDesc: '',
            engDesc: 'Success ',
            chName: '成功',
            chDesc: '成功',
            cellFilter: 'toPercent',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: 'Start x',
            field: 'startPoint.x',
            frName: '',
            engName: 'Start x',
            frDesc: '',
            engDesc: 'Start x ',
            chName: '开始 X',
            chDesc: '开始 X',
            cellFilter: 'toNumber',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: 'Start y',
            field: 'startPoint.y',
            frName: '',
            engName: 'Start y',
            frDesc: '',
            engDesc: 'Start y ',
            chName: '开始 y',
            chDesc: '开始 y',
            cellFilter: 'toNumber',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: 'End x',
            field: 'endPoint.x',
            frName: '',
            engName: 'End x',
            frDesc: '',
            engDesc: 'End x ',
            chName: '结束 x',
            chDesc: '结束 x',
            cellFilter: 'toNumber',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: 'End y',
            field: 'endPoint.y',
            frName: '',
            engName: 'End y',
            frDesc: '',
            engDesc: 'End y ',
            chName: '结束 y',
            chDesc: '结束 y',
            cellFilter: 'toNumber',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'duration',
            displayName: 'Duration',
            frName: '',
            engName: 'Duration',
            frDesc: '',
            engDesc: 'Duration ',
            chName: '持续时间',
            chDesc: '持续时间',
            cellFilter: 'toSecond',
            width: '100',
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Distance',
            field: 'dist',
            frName: '',
            engName: 'Distance',
            frDesc: '',
            engDesc: 'Distance ',
            chName: '距离',
            chDesc: '距离',
            cellFilter: 'toDistance',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: 'Distance Max',
            field: 'maxDist',
            frName: '',
            engName: 'Distance Max',
            frDesc: '',
            engDesc: 'Distance Max',
            chName: '距离最大值',
            chDesc: '距离最大值',
            cellFilter: 'toDistance',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'speed',
            displayName: 'Speed',
            frName: '',
            engName: 'Speed',
            frDesc: '',
            engDesc: 'Speed',
            chName: '速度',
            chDesc: '速度',
            cellFilter: 'toSpeed',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: 'Speed Max',
            field: 'maxSpeed',
            frName: '',
            engName: 'Speed Max',
            frDesc: '',
            engDesc: 'Distance Max',
            chName: '速度最大值',
            chDesc: '速度最大值',
            cellFilter: 'toSpeed',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: 'Top Following Event #1',
            field: 'followingEvents',
            frName: '',
            engName: 'Top Following Event #1',
            frDesc: '',
            engDesc: 'Top Following Event #1',
            chName: '紧随的事件1',
            chDesc: '紧随的事件1',
            cellFilter: 'top1EventIdToName',
            width: 100,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Top Following Event #2',
            field: 'followingEvents',
            frName: '',
            engName: 'Top Following Event #2',
            frDesc: '',
            engDesc: 'Top Following Event #2',
            chName: '紧随的事件2',
            chDesc: '紧随的事件2',
            cellFilter: 'top2EventIdToName',
            width: 100,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Top Following Event #3',
            field: 'followingEvents',
            frName: '',
            engName: 'Top Following Event #3',
            frDesc: '',
            engDesc: 'Top Following Event #3',
            chName: '紧随的事件3',
            chDesc: '紧随的事件3',
            cellFilter: 'top3EventIdToName',
            width: 100,
            filter: {
                condition: customFilterCondition
            }
        }
    ];

    var colShotExtra = [{
        displayName: 'Defender Dist.',
        frName: '',
        engName: 'Defender Dist.',
        frDesc: '',
        engDesc: 'Defender Dist.',
        chName: '防守区域',
        chDesc: '防守区域',
        cellFilter: 'toDistance',
        field: 'startDefenderDist',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation
    }, {
        displayName: '#Defenders',
        frName: '',
        engName: '#Defenders',
        frDesc: '',
        engDesc: '#Defenders',
        chName: '防守球员',
        chDesc: '防守球员',
        field: 'startNbDefenders',
        cellFilter: 'toNumber',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation
    }, {
        displayName: 'Top Defenders #1',
        frName: '',
        engName: 'Top Defenders #1',
        frDesc: '',
        engDesc: 'Top Defenders #1',
        chName: '最近的防守球员1',
        chDesc: '最近的防守球员1',
        field: 'startDefenderIds',
        cellFilter: 'top1PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        displayName: 'Top Defenders #2',
        frName: '',
        engName: 'Top Defenders #2',
        frDesc: '',
        engDesc: 'Top Defenders #2',
        chName: '最近的防守球员2',
        chDesc: '最近的防守球员2',
        field: 'startDefenderIds',
        cellFilter: 'top2PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        displayName: 'Top Defenders #3',
        frName: '',
        engName: 'Top Defenders #3',
        frDesc: '',
        engDesc: 'Top Defenders #3',
        chName: '最近的防守球员3',
        chDesc: '最近的防守球员3',
        field: 'startDefenderIds',
        cellFilter: 'top3PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }];

    var colCrossExtra = [{
        displayName: 'Start Pass Options',
        frName: '',
        engName: 'Start Pass Options',
        frDesc: '',
        engDesc: 'Start Pass Options',
        chName: '开始传球选择',
        chDesc: '开始传球选择',
        cellFilter: 'toNumber',
        field: 'startPassOptions',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation
    }, {
        displayName: 'Start Defender Dist.',
        frName: '',
        engName: 'Start Defender Dist.',
        frDesc: '',
        engDesc: 'Start Defender Dist.',
        chName: '防守球员开始区域',
        chDesc: '防守球员开始区域',
        cellFilter: 'toDistance',
        field: 'startDefenderDist',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation
    }, {
        displayName: 'End Defender Dist.',
        frName: '',
        engName: 'EndEnd Defender Dist.',
        frDesc: '',
        engDesc: 'End Defender Dist.',
        chName: '防守球员结束区域',
        chDesc: '防守球员结束区域',
        cellFilter: 'toDistance',
        field: 'endDefenderDist',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation
    }, {
        displayName: 'Target Player #1',
        frName: '',
        engName: 'Target Player #1',
        frDesc: '',
        engDesc: 'Target Player #1',
        chName: '目标球员1',
        chDesc: '目标球员1',
        field: 'targetPlayerIds',
        cellFilter: 'top1PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        displayName: 'Target Player #2',
        frName: '',
        engName: 'Target Player #2',
        frDesc: '',
        engDesc: 'Target Player #2',
        chName: '目标球员2',
        chDesc: '目标球员2',
        field: 'targetPlayerIds',
        cellFilter: 'top2PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        displayName: 'Target Player #3',
        field: 'targetPlayerIds',
        frName: '',
        engName: 'Target Player #3',
        frDesc: '',
        engDesc: 'Target Player #3',
        chName: '目标球员3',
        chDesc: '目标球员3',
        cellFilter: 'top3PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        displayName: 'Start Defender #1',
        field: 'targetPlayerIds',
        frName: '',
        engName: 'Start Defender #1',
        frDesc: '',
        engDesc: 'Start Defender #1',
        chName: '初始防守球员1',
        chDesc: '初始防守球员1',
        field: 'startDefenderIds',
        cellFilter: 'top1PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        displayName: 'Start Defender #2',
        frName: '',
        engName: 'Start Defender #2',
        frDesc: '',
        engDesc: 'Start Defender #2',
        chName: '初始防守球员2',
        chDesc: '初始防守球员2',
        field: 'startDefenderIds',
        cellFilter: 'top2PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        displayName: 'Start Defender #3',
        frName: '',
        engName: 'Start Defender #3',
        frDesc: '',
        engDesc: 'Start Defender #3',
        chName: '初始防守球员3',
        chDesc: '初始防守球员3',
        field: 'startDefenderIds',
        cellFilter: 'top3PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        displayName: 'End Defender #1',
        frName: '',
        engName: 'End Defender #1',
        frDesc: '',
        engDesc: 'End Defender #1',
        chName: '终止防守球员1',
        chDesc: '终止防守球员1',
        field: 'endDefenderIds',
        cellFilter: 'top1PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        displayName: 'End Defender #2',
        frName: '',
        engName: 'End Defender #2',
        frDesc: '',
        engDesc: 'End Defender #2',
        chName: '终止防守球员2',
        chDesc: '终止防守球员2',
        field: 'endDefenderIds',
        cellFilter: 'top2PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        displayName: 'End Defender #3',
        field: 'endDefenderIds',
        frName: '',
        engName: 'End Defender #3',
        frDesc: '',
        engDesc: 'End Defender #3',
        chName: '终止防守球员3',
        chDesc: '终止防守球员3',
        cellFilter: 'top3PlayerIdToName',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }];

    var colBallDriveExtra = [{
            displayName: '#Fwd',
            frName: '',
            engName: '#Fwd',
            frDesc: '',
            engDesc: '#Fwd',
            chName: '推进',
            chDesc: '推进',
            field: 'fwd',
            cellFilter: 'toPercent',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: 'Fwd Success',
            frName: '',
            engName: 'Fwd Success',
            frDesc: '',
            engDesc: 'Fwd Success',
            chName: '推进成功',
            chDesc: '推进成功',
            field: 'fwdSuccess',
            cellFilter: 'toPercent',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: 'Start #Defenders',
            field: 'startNbDefenders',
            frName: '',
            engName: 'Start #Defenders',
            frDesc: '',
            engDesc: 'Start #Defenders',
            chName: '初始防守球员',
            chDesc: '初始防守球员',
            cellFilter: 'toNumber',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: 'End #Defenders',
            field: 'endNbDefenders',
            frName: '',
            engName: 'End #Defenders',
            frDesc: '',
            engDesc: 'End #Defenders',
            chName: '结束防守球员',
            chDesc: '结束防守球员',
            cellFilter: 'toNumber',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: 'Closest Defender Dist.',
            frName: '',
            engName: 'Closest Defender Dist.',
            frDesc: '',
            engDesc: 'Closest Defender Dist.',
            chName: '最近的防守区域',
            chDesc: '最近的防守区域',
            cellFilter: 'toDistance',
            field: 'closestDefenderDist',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            displayName: 'Top Defenders #1',
            frName: '',
            engName: 'Top Defenders #1',
            frDesc: '',
            engDesc: 'Top Defenders #1',
            chName: '最近的防守球员1',
            chDesc: '最近的防守球员1',
            field: 'closestDefenderIds',
            cellFilter: 'top1PlayerIdToName',
            width: 100,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Top Defenders #2',
            frName: '',
            engName: 'Top Defenders #2',
            frDesc: '',
            engDesc: 'Top Defenders #2',
            chName: '最近的防守球员2',
            chDesc: '最近的防守球员2',
            field: 'closestDefenderIds',
            cellFilter: 'top2PlayerIdToName',
            width: 100,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Top Defenders #3',
            frName: '',
            engName: 'Top Defenders #3',
            frDesc: '',
            engDesc: 'Top Defenders #3',
            chName: '最近的防守球员3',
            chDesc: '最近的防守球员3',
            field: 'closestDefenderIds',
            cellFilter: 'top3PlayerIdToName',
            width: 100,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Start Pos Type #1',
            frName: '',
            engName: 'Start Pos Type #1',
            frDesc: '',
            engDesc: 'Start Pos Type #1',
            chName: '开始位置类型1',
            chDesc: '开始位置类型1',
            field: 'startPosType',
            cellFilter: 'top1PosTypeIdToName',
            width: 100,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Start Pos Type #2',
            frName: '',
            engName: 'Start Pos Type #2',
            frDesc: '',
            engDesc: 'Start Pos Type #2',
            chName: '开始位置类型2',
            chDesc: '开始位置类型2',
            field: 'startPosType',
            cellFilter: 'top2PosTypeIdToName',
            width: 100,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Start Pos Type #3',
            frName: '',
            engName: 'Start Pos Type #3',
            frDesc: '',
            engDesc: 'Start Pos Type #3',
            chName: '开始位置类型3',
            chDesc: '开始位置类型3',
            field: 'startPosType',
            cellFilter: 'top3PosTypeIdToName',
            width: 100,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'End Pos Type #1',
            frName: '',
            engName: 'End Pos Type #1',
            frDesc: '',
            engDesc: 'End Pos Type #1',
            chName: '结束位置类型1',
            chDesc: '结束位置类型1',
            field: 'endPosType',
            cellFilter: 'top1PosTypeIdToName',
            width: 100,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'End Pos Type #2',
            frName: '',
            engName: 'End Pos Type #2',
            frDesc: '',
            engDesc: 'End Pos Type #2',
            chName: '结束位置类型2',
            chDesc: '结束位置类型2',
            field: 'endPosType',
            cellFilter: 'top2PosTypeIdToName',
            width: 100,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'End Pos Type #3',
            frName: '',
            engName: 'End Pos Type #3',
            frDesc: '',
            engDesc: 'End Pos Type #3',
            chName: '结束位置类型3',
            chDesc: '结束位置类型3',
            field: 'endPosType',
            cellFilter: 'top3PosTypeIdToName',
            width: 100,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Top Bottom MidField #1',
            frName: '',
            engName: 'Top Bottom MidField #1',
            frDesc: '',
            engDesc: 'Top Bottom MidField #1',
            chName: '我不知道该写啥',
            chDesc: '我不知道该写啥',
            field: 'startBottomMidFieldPlayerIds',
            cellFilter: 'top1PlayerIdToName',
            width: 100,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Top Bottom MidField #2',
            frName: '',
            engName: 'Top Bottom MidField #2',
            frDesc: '',
            engDesc: 'Top Bottom MidField #2',
            chName: '我不知道该写啥',
            chDesc: '我不知道该写啥',
            field: 'startBottomMidFieldPlayerIds',
            cellFilter: 'top2PlayerIdToName',
            width: 100,
            filter: {
                condition: customFilterCondition
            }
        }, {
            displayName: 'Top Bottom MidField #3',
            frName: '',
            engName: 'Top Bottom MidField #3',
            frDesc: '',
            engDesc: 'Top Bottom MidField #3',
            chName: '我不知道该写啥',
            chDesc: '我不知道该写啥',
            field: 'startBottomMidFieldPlayerIds',
            cellFilter: 'top3PlayerIdToName',
            width: 100,
            filter: {
                condition: customFilterCondition
            }
        }

    ];


    var colPassExtra = [{
        displayName: 'Start #Defenders',
        frName: '',
        engName: 'Start #Defenders',
        frDesc: '',
        engDesc: 'Start #Defenders',
        chName: '初始防守球员',
        chDesc: '初始防守球员',
        field: 'startNbDefenders',
        cellFilter: 'toNumber',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation
    }, {
        displayName: 'End #Defenders',
        frName: '',
        engName: 'End #Defenders',
        frDesc: '',
        engDesc: 'End #Defenders',
        chName: '终止防守球员',
        chDesc: '终止防守球员',
        field: 'endNbDefenders',
        cellFilter: 'toNumber',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation
    }, {
        displayName: '#Fwd',
        frName: '',
        engName: '#Fwd',
        frDesc: '',
        engDesc: '#Fwd',
        chName: '推进',
        chDesc: '推进',
        field: 'fwd',
        cellFilter: 'toPercent',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation
    }, {
        field: 'fwdSuccess',
        displayName: 'Fwd Success',
        frName: '',
        engName: 'Fwd Success',
        frDesc: '',
        engDesc: 'Fwd Success',
        chName: '推进成功',
        chDesc: '推进成功',
        cellFilter: 'toPercent',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation
    }, {
        displayName: 'Fwd Distance',
        frName: '',
        engName: 'Fwd Distance',
        frDesc: '',
        engDesc: 'Fwd Distance',
        chName: '推进距离',
        chDesc: '推进距离',
        field: 'distX',
        cellFilter: 'toDistance',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation
    }, {
        displayName: 'Fwd Distance Max',
        frName: '',
        engName: 'Fwd Distance Max',
        frDesc: '',
        engDesc: 'Fwd Distance Max',
        chName: '推进距离最大值',
        chDesc: '推进距离最大值',
        field: 'maxDistX',
        cellFilter: 'toDistance',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation
    }, {
        displayName: 'End Pass Options',
        frName: '',
        engName: 'End Pass Options',
        frDesc: '',
        engDesc: 'End Pass Options',
        chName: '终止传球选择',
        chDesc: '终止传球选择',
        cellFilter: 'toNumber',
        field: 'endPassOptions',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation
    }, {
        displayName: 'Avg. Angle',
        frName: '',
        engName: 'Avg. Angle',
        frDesc: '',
        engDesc: 'Avg. Angle',
        chName: '平均角度',
        chDesc: '平均角度',
        field: 'angle',
        cellFilter: 'toNumber',
        width: 100,
        filterCellFiltered: true,
        sortCellFiltered: true,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation
    }, {
        displayName: 'Left Angle',
        frName: '',
        engName: 'Left Angle',
        frDesc: '',
        engDesc: 'Left Angle',
        chName: '左角度',
        chDesc: '左角度',
        field: 'leftAngleRatio',
        cellFilter: 'toPercent',
        width: 100,
        filterCellFiltered: true,
        sortCellFiltered: true,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation
    }, {
        displayName: 'Right Angle',
        frName: '',
        engName: 'Right Angle',
        frDesc: '',
        engDesc: 'Right Angle',
        chName: '右角度',
        chDesc: '右角度',
        field: 'rightAngleRatio',
        cellFilter: 'toPercent',
        width: 100,
        filterCellFiltered: true,
        sortCellFiltered: true,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation
    }, {
        displayName: 'Front Angle',
        frName: '',
        engName: 'Front Angle',
        frDesc: '',
        engDesc: 'Front Angle',
        chName: '前角度',
        chDesc: '前角度',
        field: 'frontAngleRatio',
        cellFilter: 'toPercent',
        width: 100,
        filterCellFiltered: true,
        sortCellFiltered: true,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation
    }, {
        displayName: 'Back Angle',
        frName: '',
        engName: 'Back Angle',
        frDesc: '',
        engDesc: 'Back Angle',
        chName: '后角度',
        chDesc: '后角度',
        field: 'backAngleRatio',
        cellFilter: 'toPercent',
        width: 100,
        filterCellFiltered: true,
        sortCellFiltered: true,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: rowValueAggregation
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
        frName: '',
        engName: 'Game Id',
        frDesc: '',
        engDesc: 'Game Id',
        chName: '比赛序号',
        chDesc: '比赛序号',
        headerTooltip: 'Game identification Nunber 2/Identifiant unique du match',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        displayName: 'halftime',
        frName: '',
        engName: 'halftime',
        frDesc: '',
        engDesc: 'halftime',
        chName: '半场时间',
        chDesc: '半场时间',
        field: 'halftime',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'team_id',
        displayName: 'Team Id',
        frName: '',
        engName: 'Team Id',
        frDesc: '',
        engDesc: 'Team Id',
        chName: '球队序号',
        chDesc: '球队序号',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'player_id',
        displayName: 'Player Id',
        frName: '',
        engName: 'Player Id',
        frDesc: '',
        engDesc: 'Player Id',
        chName: '球员序号',
        chDesc: '球员序号',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        displayName: 'Team',
        frName: '',
        engName: 'Team',
        frDesc: '',
        engDesc: 'Team',
        chName: '球队',
        chDesc: '球队',
        field: 'team_id',
        cellFilter: 'teamIdToName',
        filterCellFiltered: true,
        sortCellFiltered: true,
        width: 100,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        }
    }, {
        displayName: 'Player',
        frName: '',
        engName: 'Player',
        frDesc: '',
        engDesc: 'Player',
        chName: '球员',
        chDesc: '球员',
        field: 'player_id',
        cellFilter: 'playerIdToName',
        width: 100,
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        }
    }, {
        displayName: 'Game Title',
        frName: '',
        engName: 'Game Title',
        frDesc: '',
        engDesc: 'Game Title',
        chName: '比赛标题',
        chDesc: '比赛标题',
        field: 'game_id',
        cellFilter: 'gameIdToName',
        width: 100,
        filterCellFiltered: true,
        sortCellFiltered: true,
        cellClass: sequenceCellClass,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'ball_touched',
        displayName: 'Ball Touched',
        frName: '',
        engName: 'Ball Touched',
        frDesc: '',
        engDesc: 'Ball Touched',
        chName: '控球',
        chDesc: '控球',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'goals',
        displayName: 'Goals',
        frName: '',
        engName: 'Goals',
        frDesc: '',
        engDesc: 'Goals',
        chName: '进球数',
        chDesc: '进球数',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'shots',
        displayName: 'Shots',
        frName: '',
        engName: 'Shots',
        frDesc: '',
        engDesc: 'Shots',
        chName: '射门数',
        chDesc: '射门数',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'shots_ot_rate',
        displayName: 'Shots OT Rate',
        frName: '',
        engName: 'Shots OT Rate',
        frDesc: '',
        engDesc: 'Shots OT Rate',
        chName: '射门什么率',
        chDesc: '射门什么率',
        cellFilter: 'toPercentOnly',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'ncross',
        displayName: 'Ncross',
        frName: '',
        engName: 'Ncross',
        frDesc: '',
        engDesc: 'Ncross',
        chName: '通过',
        chDesc: '通过',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'cross_rate',
        displayName: 'Cross Rate',
        frName: '',
        engName: 'Cross Rate',
        frDesc: '',
        engDesc: 'Cross Rate',
        chName: '通过率？',
        chDesc: '通过率？',
        cellFilter: 'toPercentOnly',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'pass',
        displayName: 'Pass',
        frName: '',
        engName: 'Pass',
        frDesc: '',
        engDesc: 'Pass',
        chName: '传球',
        chDesc: '传球',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'fwd_pass',
        displayName: 'Fwd Pass',
        frName: '',
        engName: 'Fwd Pass',
        frDesc: '',
        engDesc: 'Fwd Pass',
        chName: '前进传球',
        chDesc: '前进传球',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'pass_pressure',
        displayName: 'Pass Pressure',
        frName: '',
        engName: 'Pass Pressure',
        frDesc: '',
        engDesc: 'Pass Pressure',
        chName: '防守传球',
        chDesc: '防守传球',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'pass_dist_avg',
        displayName: 'Pass Distance Avg',
        frName: '',
        engName: 'Pass Distance Avg',
        frDesc: '',
        engDesc: 'Pass Distance Avg',
        chName: '传球平均距离',
        chDesc: '传球平均距离',
        cellFilter: 'toDistance',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'pass_dxdist_avg',
        displayName: 'Pass DxDistance Avg',
        frName: '',
        engName: 'Pass DxDistance Avg',
        frDesc: '',
        engDesc: 'Pass DxDistance Avg',
        chName: '传球平均Dx距离',
        chDesc: '传球平均Dx距离',
        cellFilter: 'toDistance',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'pass_rate',
        displayName: 'Pass Rate',
        frName: '',
        engName: 'Pass Rate',
        frDesc: '',
        engDesc: 'Pass Rate',
        chName: '传球率',
        chDesc: '传球率',
        cellFilter: 'toPercentOnly',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'fwd_pass_rate',
        displayName: 'Fwd Pass Rate',
        frName: '',
        engName: 'Fwd Pass Rate',
        frDesc: '',
        engDesc: 'Fwd Pass Rate',
        chName: '前进传球率',
        chDesc: '前进传球率',
        cellFilter: 'toPercentOnly',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'pass_pressure_rate',
        displayName: 'Pass Pressure Rate',
        frName: '',
        engName: 'Pass Pressure Rate',
        frDesc: '',
        engDesc: 'Pass Pressure Rate',
        chName: '防守传球率',
        chDesc: '防守传球率',
        cellFilter: 'toPercentOnly',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'pass_pressure_dxdist_avg',
        displayName: 'Pass Pressure DxDist Avg',
        frName: '',
        engName: 'Pass Pressure DxDist Avg',
        frDesc: '',
        engDesc: 'Pass Pressure DxDist Avg',
        chName: '防守传球平均Dx距离',
        chDesc: '防守传球平均Dx距离',
        cellFilter: 'toDistance',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'ball_drive',
        displayName: 'Ball Drive',
        frName: '',
        engName: 'Ball Drive',
        frDesc: '',
        engDesc: 'Ball Drive',
        chName: '运球',
        chDesc: '运球',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'bd_dist_avg',
        displayName: 'Ball Drive Dist Avg',
        frName: '',
        engName: 'Ball Drive Dist Avg',
        frDesc: '',
        engDesc: 'Ball Drive Dist Avg',
        chName: '运球平均距离',
        chDesc: '运球平均距离',
        cellFilter: 'toDistance',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'bd_dxdist_avg',
        displayName: 'Ball Drive DxDist Avg',
        frName: '',
        engName: 'Ball Drive DxDist Avg',
        frDesc: '',
        engDesc: 'Ball Drive DxDist Avg',
        chName: '运球平均Dx距离',
        chDesc: '运球平均Dx距离',
        cellFilter: 'toDistance',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'bd_beat_def_avg',
        displayName: 'Ball Drive Beat Def Avg',
        frName: '',
        engName: 'Ball Drive Beat Def Avg',
        frDesc: '',
        engDesc: 'Ball Drive Beat Def Avg',
        chName: '运球甩开防守球员',
        chDesc: '运球甩开防守球员',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'ball_drive_rate',
        displayName: 'Ball Drive Rate',
        frName: '',
        engName: 'Ball Drive Rate',
        frDesc: '',
        engDesc: 'Ball Drive Rate',
        chName: '控球率',
        chDesc: '控球率',
        cellFilter: 'toPercentOnly',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'header',
        displayName: 'Header',
        frName: '',
        engName: 'Header',
        frDesc: '',
        engDesc: 'Header',
        chName: '头球',
        chDesc: '头球',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'header_rate',
        displayName: 'Header Rate',
        frName: '',
        engName: 'Header Rate',
        frDesc: '',
        engDesc: 'Header Rate',
        chName: '头球率',
        chDesc: '头球率',
        cellFilter: 'toPercentOnly',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'interception',
        displayName: 'Interception',
        frName: '',
        engName: 'Interception',
        frDesc: '',
        engDesc: 'Interception',
        chName: '抢断',
        chDesc: '抢断',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'clean_intercp',
        displayName: 'Clean Interception',
        frName: '',
        engName: 'Clean Interception',
        frDesc: '',
        engDesc: 'Clean Interception',
        chName: '直接抢断',
        chDesc: '直接抢断',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'pass_intercep',
        displayName: 'Pass Interception',
        frName: '',
        engName: 'Pass Interception',
        frDesc: '',
        engDesc: 'Pass Interception',
        chName: '传球抢断',
        chDesc: '传球抢断',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'dribl_intercep',
        displayName: 'Drible Interception',
        frName: '',
        engName: 'Drible Interception',
        frDesc: '',
        engDesc: 'Drible Interception',
        chName: '夹击抢断',
        chDesc: '夹击抢断',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'ball_pressure',
        displayName: 'Ball Pressure',
        frName: '',
        engName: 'Ball Pressure',
        frDesc: '',
        engDesc: 'Ball Pressure',
        chName: '球防守',
        chDesc: '球防守',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'indirect_intercep',
        displayName: 'Indirect Pressure',
        frName: '',
        engName: 'Indirect Pressure',
        frDesc: '',
        engDesc: 'Indirect Pressure',
        chName: '间接防守',
        chDesc: '间接防守',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'ball_press_back_pass',
        displayName: 'Ball Press Back Pass',
        frName: '',
        engName: 'Ball Press Back Pass',
        frDesc: '',
        engDesc: 'Ball Press Back Pass',
        chName: '触球后回传',
        chDesc: '触球后回传',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'foul',
        displayName: 'Foul',
        frName: '',
        engName: 'Foul',
        frDesc: '',
        engDesc: 'Foul',
        chName: '犯规',
        chDesc: '犯规',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'foul_suffered',
        displayName: 'Foul Suffered',
        frName: '',
        engName: 'Foul Suffered',
        frDesc: '',
        engDesc: 'Foul Suffered',
        chName: '被犯规',
        chDesc: '被犯规',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'speed',
        displayName: 'Speed',
        frName: '',
        engName: 'Speed',
        frDesc: '',
        engDesc: 'Speed',
        chName: '速度',
        chDesc: '速度',
        cellFilter: 'toSpeed',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'sprint_rate',
        displayName: 'Sprint Rate',
        frName: '',
        engName: 'Sprint Rate',
        frDesc: '',
        engDesc: 'Sprint Rate',
        chName: '冲刺比',
        chDesc: '冲刺比',
        cellFilter: 'toPercentOnly',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'walk_rate',
        displayName: 'Walk Rate',
        frName: '',
        engName: 'Walk Rate',
        frDesc: '',
        engDesc: 'Walk Rate',
        chName: '走路比',
        chDesc: '走路比',
        cellFilter: 'toPercentOnly',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'walk_rate_attack',
        displayName: 'Walk Rate Attack',
        frName: '',
        engName: 'Walk Rate Attack',
        frDesc: '',
        engDesc: 'Walk Rate Attack',
        chName: '走路进攻比',
        chDesc: '走路进攻比',
        cellFilter: 'toPercentOnly',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'walk_rate_defense',
        displayName: 'Walk Rate Defense',
        frName: '',
        engName: 'Walk Rate Defense',
        frDesc: '',
        engDesc: 'Walk Rate Defense',
        chName: '走路防守比',
        chDesc: '走路防守比',
        cellFilter: 'toPercentOnly',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'sprint_rate_attack',
        displayName: 'Sprint Rate Attack',
        frName: '',
        engName: 'Sprint Rate Attack',
        frDesc: '',
        engDesc: 'Sprint Rate Attack',
        chName: '冲刺进攻比',
        chDesc: '冲刺进攻比',
        cellFilter: 'toPercentOnly',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'sprint_rate_defense',
        displayName: 'Sprint Rate Defense',
        frName: '',
        engName: 'Sprint Rate Defense',
        frDesc: '',
        engDesc: 'Sprint Rate Defense',
        chName: '冲刺防守比',
        chDesc: '冲刺防守比',
        cellFilter: 'toPercentOnly',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'cum_dist',
        displayName: 'Cum Dist',
        frName: '',
        engName: 'Cum Dist',
        frDesc: '',
        engDesc: 'Cum Dist',
        chName: '累计距离',
        chDesc: '累计距离',
        cellFilter: 'toDistance',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'speed_attack',
        displayName: 'Speed Attack',
        frName: '',
        engName: 'Speed Attack',
        frDesc: '',
        engDesc: 'Speed Attack',
        chName: '进攻速度',
        chDesc: '进攻速度',
        cellFilter: 'toSpeed',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'cum_dist_attack',
        displayName: 'Cum Dist Attack',
        frName: '',
        engName: 'Cum Dist Attack',
        frDesc: '',
        engDesc: 'Cum Dist Attack',
        chName: '进攻累计距离',
        chDesc: '进攻累计距离',
        cellFilter: 'toDistance',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'speed_defense',
        displayName: 'Speed Defense',
        frName: '',
        engName: 'Speed Defense',
        frDesc: '',
        engDesc: 'Speed Defense',
        chName: '防守速度',
        chDesc: '防守速度',
        cellFilter: 'toSpeed',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'cum_dist_defense',
        displayName: 'Cum Dist Defense',
        frName: '',
        engName: 'Cum Dist Defense',
        frDesc: '',
        engDesc: 'Cum Dist Defense',
        chName: '防守累计距离',
        chDesc: '防守累计距离',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'tm_dist_min_tavg',
        displayName: 'TM Dist Min Tavg',
        frName: '',
        engName: 'TM Dist Min Tavg',
        frDesc: '',
        engDesc: 'TM Dist Min Tavg',
        chName: '？？？',
        chDesc: '？？？',
        cellFilter: 'toDistance',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'opp_dist_min_tavg',
        displayName: 'Opp Dist Min Tavg',
        frName: '',
        engName: 'Opp Dist Min Tavg',
        frDesc: '',
        engDesc: 'Opp Dist Min Tavg',
        chName: '？？？',
        chDesc: '？？？',
        cellFilter: 'toDistance',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'opp_dist_min_tavg_defense',
        displayName: 'Opp Dist Min Tavg Defense',
        frName: '',
        engName: 'Opp Dist Min Tavg Defense',
        frDesc: '',
        engDesc: 'Opp Dist Min Tavg Defense',
        chName: '？？？',
        chDesc: '？？？',
        cellFilter: 'toDistance',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'opp_dist_min_tavg_attack',
        displayName: 'Opp Dist Min Tavg Attack',
        frName: '',
        engName: 'Opp Dist Min Tavg Attack',
        frDesc: '',
        engDesc: 'Opp Dist Min Tavg Attack',
        chName: '？？？',
        chDesc: '？？？',
        cellFilter: 'toDistance',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'tm_dist_min_tavg_attack',
        displayName: 'TM Dist Min Tavg Attack',
        frName: '',
        engName: 'TM Dist Min Tavg Attack',
        frDesc: '',
        engDesc: 'TM Dist Min Tavg Attack',
        chName: '？？？',
        chDesc: '？？？',
        cellFilter: 'toDistance',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'tm_dist_min_tavg_defense',
        displayName: 'TM Dist Min Tavg Defense',
        frName: '',
        engName: 'TM Dist Min Tavg Defense',
        frDesc: '',
        engDesc: 'TM Dist Min Tavg Defense',
        chName: '？？？',
        chDesc: '？？？',
        cellFilter: 'toDistance',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'sl_tm_dist_min_tavg_defense',
        displayName: 'SL TM Dist Min Tavg Defense',
        frName: '',
        engName: 'SL TM Dist Min Tavg Defense',
        frDesc: '',
        engDesc: 'SL TM Dist Min Tavg Defense',
        chName: '？？？',
        chDesc: '？？？',
        cellFilter: 'toDistance',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'sl_tm_dist_min_tavg_attack',
        displayName: 'SL TM Dist Min Tavg Attack',
        frName: '',
        engName: 'SL TM Dist Min Tavg Attack',
        frDesc: '',
        engDesc: 'SL TM Dist Min Tavg Attack',
        chName: '？？？',
        chDesc: '？？？',
        cellFilter: 'toDistance',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'sl_tm_dist_min_tavg',
        displayName: 'SL TM Dist Min Tavg',
        frName: '',
        engName: 'SL TM Dist Min Tavg',
        frDesc: '',
        engDesc: 'SL TM Dist Min Tavg',
        chName: '？？？',
        chDesc: '？？？',
        cellFilter: 'toDistance',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'shot_from_box',
        displayName: 'Shot From Box',
        frName: '',
        engName: 'Shot From Box',
        frDesc: '',
        engDesc: 'Shot From Box',
        chName: '角球射门',
        chDesc: '角球射门',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'shot_from_box_ot',
        displayName: 'Shot From Box OT',
        frName: '',
        engName: 'Shot From Box OT',
        frDesc: '',
        engDesc: 'Shot From Box OT',
        chName: '角球射门OT',
        chDesc: '角球射门OT',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'shot_pressure',
        displayName: 'Shot Pressure',
        frName: '',
        engName: 'Shot Pressure',
        frDesc: '',
        engDesc: 'Shot Pressure',
        chName: '射门防守',
        chDesc: '射门防守',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'shot_pressure_ot',
        displayName: 'Shot Pressure OT',
        frName: '',
        engName: 'Shot Pressure OT',
        frDesc: '',
        engDesc: 'Shot Pressure OT',
        chName: '射门防守 OT',
        chDesc: '射门防守 OT',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'ncross_in_thebox',
        displayName: 'Ncross In the Box',
        frName: '',
        engName: 'Ncross In the Box',
        frDesc: '',
        engDesc: 'Ncross In the Box',
        chName: '角球传球次数？',
        chDesc: '角球传球次数？',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'ball_drive_pressure',
        displayName: 'Ball Drive Pressure',
        frName: '',
        engName: 'Ball Drive Pressure',
        frDesc: '',
        engDesc: 'Ball Drive Pressure',
        chName: '运球防守',
        chDesc: '运球防守',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'ball_drive_bmd',
        displayName: 'Ball Drive BMD',
        frName: '',
        engName: 'Ball Drive BMD',
        frDesc: '',
        engDesc: 'Ball Drive BMD',
        chName: '运球??',
        chDesc: '运球??',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'ball_drive_pressure_rate',
        displayName: 'Ball Drive Pressure Rate',
        frName: '',
        engName: 'Ball Drive Pressure Rate',
        frDesc: '',
        engDesc: 'Ball Drive Pressure Rate',
        chName: '运球防守比',
        chDesc: '运球防守比',
        cellFilter: 'toPercentOnly',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'ball_drive_bmd_rate',
        displayName: 'Ball Drive BMD Rate',
        frName: '',
        engName: 'Ball Drive BMD Rate',
        frDesc: '',
        engDesc: 'Ball Drive BMD Rate',
        chName: '运球??比',
        chDesc: '运球??比',
        cellFilter: 'toPercentOnly',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'at_header',
        displayName: 'At Header',
        frName: '',
        engName: 'At Header',
        frDesc: '',
        engDesc: 'At Header',
        chName: '头球',
        chDesc: '头球',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'at_header_rate',
        displayName: 'At Header Rate',
        frName: '',
        engName: 'At Header Rate',
        frDesc: '',
        engDesc: 'At Header Rate',
        chName: '头球比',
        chDesc: '头球比',
        cellFilter: 'toPercentOnly',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'def_header',
        displayName: 'Def Header',
        frName: '',
        engName: 'Def Header',
        frDesc: '',
        engDesc: 'Def Header',
        chName: '头球防守',
        chDesc: '头球防守',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'foul_contact',
        displayName: 'Foul Contact',
        frName: '',
        engName: 'Foul Contact',
        frDesc: '',
        engDesc: 'Foul Contact',
        chName: '犯规联系',
        chDesc: '犯规联系',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'foul_offside',
        displayName: 'Foul Offside',
        frName: '',
        engName: 'Foul Offside',
        frDesc: '',
        engDesc: 'Foul Offside',
        chName: '越位',
        chDesc: '越位',
        width: 100,
        filter: {
            condition: customFilterCondition
        },
        treeAggregationType: 'avg',
        customTreeAggregationFinalizerFn: numberAggreg
    }, {
        field: 'avg_bv_x',
        displayName: 'Avg BV X',
        frName: '',
        engName: 'Avg BV X',
        frDesc: '',
        engDesc: 'Avg BV X',
        chName: '平均？X',
        chDesc: '平均？X',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'avg_bv_y',
        displayName: 'Avg BV Y',
        frName: '',
        engName: 'Avg BV Y',
        frDesc: '',
        engDesc: 'Avg BV Y',
        chName: '平均？Y',
        chDesc: '平均？Y',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'avg_bv_attack_x',
        displayName: 'Avg BV Attack X',
        frName: '',
        engName: 'Avg BV Attack X',
        frDesc: '',
        engDesc: 'Avg BV Attack X',
        chName: '平均？X',
        chDesc: '平均？X',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'avg_bv_attack_y',
        displayName: 'Avg BV Attack Y',
        frName: '',
        engName: 'Avg BV Attack Y',
        frDesc: '',
        engDesc: 'Avg BV Attack Y',
        chName: '平均？进攻Y',
        chDesc: '平均？进攻Y',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'avg_bv_defense_x',
        displayName: 'Avg BV Defense X',
        frName: '',
        engName: 'Avg BV Defense X',
        frDesc: '',
        engDesc: 'Avg BV Defense X',
        chName: '平均？防守X',
        chDesc: '平均？防守X',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }, {
        field: 'avg_bv_defense_y',
        displayName: 'Avg BV Defense Y',
        frName: '',
        engName: 'Avg BV Defense Y',
        frDesc: '',
        engDesc: 'Avg BV Defense Y',
        chName: '平均？防守Y',
        chDesc: '平均？防守Y',
        width: 100,
        filter: {
            condition: customFilterCondition
        }
    }];

    var colsTeamBd = [{
            field: 'game_id',
            headerTooltip: 'identité du match',
            displayName: 'Game Id',
            frName: 'Identifiant Match',
            engName: 'Game Id',
            frDesc: 'identité du match',
            engDesc: 'game identity',
            chName: '比赛序号',
            width: 100,
            filter: {
                condition: customFilterCondition
            }
        }, {
            field: 'halftime',
            headerTooltip: 'match décomposé en plusieurs parties : 6: match complet - 1:1ère mi temps - 2: 2ème mi temps',
            displayName: 'Halftime',
            frName: 'Mi Temps',
            engName: 'Halftime',
            frDesc: 'match décomposé en plusieurs parties : 6: match complet - 1:1ère mi temps - 2: 2ème mi temps',
            engDesc: 'game is making up through different parts : 6 whole game - 1: 1st half - 2: 2nd half',
            chName: '比赛构成:1 上半场 2 下半场',
            width: 100,
            filter: {
                condition: customFilterCondition
            }
        }, {
            field: 'team_id',
            headerTooltip: 'identité de l\'équipe',
            displayName: 'Team Id',
            frName: 'Identifiant Équipe',
            engName: 'Team Id',
            frDesc: 'identité de l\'équipe',
            engDesc: 'identity of the team',
            chName: '球队序号',
            width: 100,
            filter: {
                condition: customFilterCondition
            }
        }, {
            field: 'team_id',
            headerTooltip: 'nom de l\'équipe',
            displayName: 'Team Name',
            frName: 'Nom Équipe',
            engName: 'Team Name',
            frDesc: 'nom de l\'équipe',
            engDesc: 'identity of the team',
            chName: '球队名称',
            cellFilter: 'teamIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            }
        }, {
            field: 'game_id',
            headerTooltip: 'titre du match',
            displayName: 'Game Title',
            frName: 'Titre Match',
            engName: 'Game Title',
            frDesc: 'titre du match',
            engDesc: 'game identity',
            chName: '比赛标题',
            cellFilter: 'gameIdToName',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            }
        }, {
            field: 'goals',
            headerTooltip: 'buts marqués par une équipe',
            displayName: 'Goals',
            frName: 'Buts',
            engName: 'Goals',
            frDesc: 'buts marqués par une équipe',
            engDesc: 'goals scored by a team',
            chName: '进球数',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'shots',
            headerTooltip: 'tirs effectués par une équipe',
            displayName: 'Shots',
            frName: 'Tirs ',
            engName: 'Shots',
            frDesc: 'tirs effectués par une équipe',
            engDesc: 'shots made by a team',
            chName: '射门数',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'shots_ot',
            headerTooltip: 'tirs ou frappes avec une trajectoire vers l\'intérieur du but',
            displayName: 'Shots On Target',
            frName: 'Tirs Cadrés',
            engName: 'Shots On Target',
            frDesc: 'tirs ou frappes avec une trajectoire vers l\'intérieur du but',
            engDesc: 'shots in direction to the goal',
            chName: '直接射门数',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'ncross',
            headerTooltip: 'envoyer le ballon dans la surface de réparation depuis les côtés',
            displayName: 'Nbcross',
            frName: 'Nb Centres',
            engName: 'Nbcross',
            frDesc: 'envoyer le ballon dans la surface de réparation depuis les côtés',
            engDesc: 'send the ball into the penalty area from the sides',
            chName: '传球数',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'cross_rate',
            headerTooltip: 'envoyer le ballon dans la surface de réparation depuis les côtés avec un partenaire qui le récupère',
            displayName: 'Successful Cross ',
            frName: 'Centres Réussis',
            engName: 'Successful Cross ',
            frDesc: 'envoyer le ballon dans la surface de réparation depuis les côtés avec un partenaire qui le récupère',
            engDesc: 'send the ball into the penalty area from the sides with a partner who gets it',
            chName: '传球成功率',
            cellFilter: 'toPercentOnly',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'pass',
            headerTooltip: 'envoyer le ballon à un coéquipier',
            displayName: 'Pass',
            frName: 'Passes',
            engName: 'Pass',
            frDesc: 'envoyer le ballon à un coéquipier',
            engDesc: 'send the ball to a team-mate',
            chName: '过人次数',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'pass_rate',
            headerTooltip: 'envoyer le ballon a un coequipier et que celui-ci le récupère',
            displayName: 'Pass-Rate',
            frName: 'Passes Réussies',
            engName: 'Pass-Rate',
            frDesc: 'envoyer le ballon a un coequipier et que celui-ci le récupère',
            engDesc: 'send the ball to a team-mate and the team-mate gets it',
            chName: '过人成功率',
            cellFilter: 'toPercentOnly',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'fwd_pass',
            headerTooltip: 'envoyer le ballon à un coéquipier vers l\'avant',
            displayName: 'Pass Forward',
            frName: 'Passes Vers L\'Avant',
            engName: 'Pass Forward',
            frDesc: 'envoyer le ballon à un coéquipier vers l\'avant',
            engDesc: 'send the ball forward to a team-mate',
            chName: '直接传球',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'fwd_pass_rate',
            headerTooltip: 'envoyer le ballon à un coéquipier vers l\'avant et que celui-ci le récupère',
            displayName: 'Successful Pass Forward',
            frName: 'Passes Vers L\'Avant Réussies',
            engName: 'Successful Pass Forward',
            frDesc: 'envoyer le ballon à un coéquipier vers l\'avant et que celui-ci le récupère',
            engDesc: 'send the ball forward to a team-mate and the team-mate gets it',
            chName: '直接传球成功率',
            cellFilter: 'toPercentOnly',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'pass_pressure',
            headerTooltip: 'envoyer le ballon à un coéquipier sous pression défensive d\'un adversaire à moins de 2 m',
            displayName: 'Passe_Pressure',
            frName: 'Passes Sous Pression Défensive Avec Un Adversaire À Moins De 2 M',
            engName: 'Passe_Pressure',
            frDesc: 'envoyer le ballon à un coéquipier sous pression défensive d\'un adversaire à moins de 2 m',
            engDesc: 'under pressure, send the ball to a team-mate with an opponent at less than 2m',
            chName: '紧逼下传球',
            chDesc: '在对方球员紧逼防守下，选择传球',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'pass_pressure_rate',
            headerTooltip: 'envoyer le ballon à un coéquipier sous pression défensive d\'un adversaire à moins de 2 m et que le coéquipier le récupère',
            displayName: 'Successful Pass Under Pressure ',
            frName: 'Passes Sous Préssion Réussies',
            engName: 'Successful Pass Under Pressure ',
            frDesc: 'envoyer le ballon à un coéquipier sous pression défensive d\'un adversaire à moins de 2 m et que le coéquipier le récupère',
            engDesc: 'under pressure, send the ball to a team-mate with an opponent at less than 2m and the team-mate gets it',
            chName: '紧逼下传球成功率',
            chDesc: '在对方球员紧逼防守下，传球成功率',
            cellFilter: 'toPercentOnly',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'ball_drive',
            headerTooltip: 'conduite de balle d\'un joueur',
            displayName: 'Ball Drive',
            frName: 'Conduite De Balle',
            engName: 'Ball Drive',
            frDesc: 'conduite de balle d\'un joueur',
            engDesc: 'ball drive of a player',
            chName: '运球',
            chDesc: '球员的运球次数',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'ball_drive_rate',
            headerTooltip: 'conduite de balle d\'un joueur sans perte du ballon',
            displayName: 'Successful Ball Drive',
            frName: 'Conduite De Balle Réussie',
            engName: 'Successful Ball Drive',
            frDesc: 'conduite de balle d\'un joueur sans perte du ballon',
            engDesc: 'ball drive of a player without loosing the ball',
            chName: '运球率成功率',
            chDesc: '运球而不被对方球员抢断',
            cellFilter: 'toPercentOnly',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'header',
            headerTooltip: 'reprise du ballon par un joueur de la tête',
            displayName: 'Header',
            frName: 'Têtes',
            engName: 'Header',
            frDesc: 'reprise du ballon par un joueur de la tête',
            engDesc: 'ball touched by a player with his head',
            chName: '头球',
            chDesc: '用头部触球',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'header_rate',
            headerTooltip: 'reprise du ballon par un joueur de la tête avec succès',
            displayName: 'Successful Header',
            frName: 'Têtes Réussies',
            engName: 'Successful Header',
            frDesc: 'reprise du ballon par un joueur de la tête avec succès',
            engDesc: 'successful ball touched by a player with his head',
            chName: '头球成功率',
            chDesc: '头球成功率',
            cellFilter: 'toPercentOnly',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'interception',
            headerTooltip: 'interception du ballon par un joueur après une passe, un centre, un tir, une tête ou une touche de l\'équipe adversaire',
            displayName: 'Interception',
            frName: 'Interceptions',
            engName: 'Interception',
            frDesc: 'interception du ballon par un joueur après une passe, un centre, un tir, une tête ou une touche de l\'équipe adversaire',
            engDesc: 'interception of the ball by a player after a pass, a cross, a shot, an head or a throw in of the away team',
            chName: '拦截',
            chDesc: '防守球员接到进攻方的传球',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'ball_pressure',
            headerTooltip: 'pressing de l\'équipe adversaire sur le porteur du ballon',
            displayName: 'Pressure On The Player With The Ball',
            frName: 'Pressing Sur Le Porteur Du Ballon',
            engName: 'Pressure On The Player With The Ball',
            frDesc: 'pressing de l\'équipe adversaire sur le porteur du ballon',
            engDesc: 'pressure of the away team on the player with the ball',
            chName: '对球的防守',
            chDesc: '对运球球员的防守 ',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'indirect_intercep',
            headerTooltip: 'pressing de l\'équipe adversaire sur le porteur du ballon qui conduit a une passe raté de celui-ci',
            displayName: 'Pressure Which Create A Failed Pass',
            frName: 'Pressing Qui Conduit A Une Passe Ratée',
            engName: 'Pressure Which Create A Failed Pass',
            frDesc: 'pressing de l\'équipe adversaire sur le porteur du ballon qui conduit a une passe raté de celui-ci',
            engDesc: 'pressure of the away team on the player with the ball where the player with the ball loose it',
            chName: '传球失败',
            chDesc: ' 因对方球员的防守，导致传球失败',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'ball_press_back_pass',
            headerTooltip: 'pressing de l\'équipe adversaire sur le porteur du ballon qui conduit a une passe vers l\'arrière de celui-ci',
            displayName: 'Pressing Which Leads A Pass Backward',
            frName: 'Pressing Qui Conduit A Une Passe Vers L’Arrière',
            engName: 'Pressing Which Leads A Pass Backward',
            frDesc: 'pressing de l\'équipe adversaire sur le porteur du ballon qui conduit a une passe vers l\'arrière de celui-ci',
            engDesc: 'pressure of the away team on the player with the ball where the player make a pass backward',
            chName: '防守传球',
            chDesc: '因对方球员的防守，被迫选择传球',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'speed',
            headerTooltip: 'vitesse de l\'équipe',
            displayName: 'Speed',
            frName: 'Vitesse',
            engName: 'Speed',
            frDesc: 'vitesse de l\'équipe',
            engDesc: 'speed of the team',
            chName　: '球队速度',
            chDesc: '球队的平均速度',
            cellFilter: 'toSpeed',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'speed_std_dev',
            headerTooltip: 'dispersion écart type de la vitesse',
            displayName: 'Speed Standard Deviation',
            frName: 'Vitesse Ecart Type',
            engName: 'Speed Standard Deviation',
            frDesc: 'dispersion écart type de la vitesse',
            engDesc: 'speed standard deviation',
            chName: '速度标准差',
            chDesc: '速度标准差',
            cellFilter: 'toSpeed',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'goal_dist_avg',
            headerTooltip: 'distance moyenne du joueur de l\'équipe du but adversaire',
            displayName: 'Goal Distance Average',
            frName: 'Distance Moyenne Du But',
            engName: 'Goal Distance Average',
            frDesc: 'distance moyenne du joueur de l\'équipe du but adversaire',
            engDesc: 'average distance to opponent goal',
            chName: '球员距离对方球门的距离',
            chDesc: '球员距离对方球门的距离',
            cellFilter: 'toDistance',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'goal_dist_avg_tavg',
            headerTooltip: 'distance moyenne de l\'équipe du but adversaire',
            displayName: 'Goal Distance Average Team',
            frName: 'Ditance Moyenne De L\'Équipe Du But',
            engName: 'Goal Distance Average Team',
            frDesc: 'distance moyenne de l\'équipe du but adversaire',
            engDesc: 'team average distance to opponent goal',
            chName: '球队所有球员距离对方球门的平均距离',
            chDesc: '球队所有球员距离对方球门的平均距离',
            cellFilter: 'toDistance',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'tm_dist_min_tavg_attack',
            headerTooltip: 'distance au plus proche coéquipier en situation d\'attaque',
            displayName: 'Distance Team-Mates Attack',
            frName: 'Distance Au Plus Proche Coéquipier En Situation D\'Attaque',
            engName: 'Distance Team-Mates Attack',
            frDesc: 'distance au plus proche coéquipier en situation d\'attaque',
            engDesc: 'distance to the nearest team-mate during attack',
            chName: '进攻时最近队友的距离',
            chDesc: '球员发起进攻时，最近一位队友的距离',
            cellFilter: 'toDistance',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'opp_dist_min_tavg_defense',
            headerTooltip: 'distance de marquage au plus proche adversaire en situation de défense',
            displayName: 'Distance Opponent Defense',
            frName: 'Distance De Marquage Au Plus Proche En Situation De Défense',
            engName: 'Distance Opponent Defense',
            frDesc: 'distance de marquage au plus proche adversaire en situation de défense',
            engDesc: 'distance to the nearest opponent during the defense time',
            chName: '防守距离',
            chDesc: '防守时，与对方球员的最近距离',
            cellFilter: 'toDistance',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'sprint_rate',
            headerTooltip: 'pourcentage de temps en sprint',
            displayName: 'Sprint Rate',
            frName: 'Pourcentage De Temps En Sprint',
            engName: 'Sprint Rate',
            frDesc: 'pourcentage de temps en sprint',
            engDesc: 'time of the team in sprint',
            chName: '球队冲刺时间',
            chDesc: '球队在冲刺状态下的时间',
            cellFilter: 'toPercent',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'walk_rate',
            headerTooltip: 'pourcentage de temps en marche',
            displayName: 'Walk Rate',
            frName: 'Pourcentage De Temps En Marche',
            engName: 'Walk Rate',
            frDesc: 'pourcentage de temps en marche',
            engDesc: 'time of the team in walk',
            chName: '球队走路的时间',
            chDesc: '球队在走路状态下的时间',
            cellFilter: 'toPercent',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'walk_rate_attack',
            headerTooltip: 'pourcentage de temps en marche en attaque',
            displayName: 'Walk Rate Attack',
            frName: 'Pourcentage De Temps En Marche En Attaque',
            engName: 'Walk Rate Attack',
            frDesc: 'pourcentage de temps en marche en attaque',
            engDesc: 'time of the team in walk in attack',
            chName: '球队走路进攻比',
            chDesc: '球队在走路状态下的时间',
            cellFilter: 'toPercent',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'walk_rate_defense',
            headerTooltip: 'pourcentage de temps en marche en défense',
            displayName: 'Walk Rate Defense',
            frName: 'Pourcentage De Temps En Marche En Défense',
            engName: 'Wlak Rate Defense',
            frDesc: 'pourcentage de temps en marche en défense',
            engDesc: 'time of the team in walk in defense',
            chName: '防守步频',
            chDesc: '球队在防守状态下的步频',
            cellFilter: 'toPercent',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'sprint_rate_attack',
            headerTooltip: 'pourcentage de temps en sprint en attaque',
            displayName: 'Sprinte Rate Attack',
            frName: 'Pourcentage De Temps En Sprint En Attaque',
            engName: 'Sprinte Rate Attack',
            frDesc: 'pourcentage de temps en sprint en attaque',
            engDesc: 'time of the team in sprint in attack',
            chName: '冲刺进攻比',
            chDesc: '球队在冲刺状态下进攻的时间',
            cellFilter: 'toPercent',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'sprint_rate_defense',
            headerTooltip: 'pourcentage de temps en sprint en défense',
            displayName: 'Sprint Rate Defense',
            frName: 'Pourcentage De Temps En Sprint En Défense',
            engName: 'Sprint Rate Defense',
            frDesc: 'pourcentage de temps en sprint en défense',
            engDesc: 'time of the team in sprint in defense',
            chName: '冲刺防守比',
            chDesc: '球队在冲刺状态下防守的时间',
            cellFilter: 'toPercent',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'cum_dist',
            headerTooltip: 'distance totale parcourue par l\'équipe',
            displayName: 'Total Distance',
            frName: 'Distance Totale Parcourue',
            engName: 'Total Distance',
            frDesc: 'distance totale parcourue par l\'équipe',
            engDesc: 'team total distance',
            chName: '球员运动距离',
            chDesc: '球队所有球员比赛时的运动距离',
            cellFilter: 'toDistance',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'speed_attack',
            headerTooltip: 'vitesse moyenne en attaque pour une équipe',
            displayName: 'Speed Attack',
            frName: 'Vitesse Moyenne En Attaque',
            engName: 'Speed Attack',
            frDesc: 'vitesse moyenne en attaque pour une équipe',
            engDesc: 'average speed in attack by a team',
            chName: '进攻速度',
            chDesc: '进攻时，整个球队的速度',
            cellFilter: 'toSpeed',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'cum_dist_attack',
            headerTooltip: 'distance total parcourue en attaque par une équipe',
            displayName: 'Total Distance Made Per Attack',
            frName: 'Distance Totale Parcourue En Attaque',
            engName: 'Total Distance Made Per Attack',
            frDesc: 'distance total parcourue en attaque par une équipe',
            engDesc: 'average distance made in attack by a team',
            chName: '进攻距离',
            chDesc: '球队进攻时的平均移动距离',
            cellFilter: 'toDistance',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'speed_defense',
            headerTooltip: 'vitesse moyenne en défense pour une équipe',
            displayName: 'Speed Defense',
            frName: 'Vitesse Moyenne En Défense',
            engName: 'Speed Defense',
            frDesc: 'vitesse moyenne en défense pour une équipe',
            engDesc: 'speed in defense for a team',
            chName: '防守速度',
            chDesc: '球队的防守速度',
            cellFilter: 'toSpeed',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'cum_dist_defense',
            headerTooltip: 'distance totale parcourue en défense par une équipe',
            displayName: 'Total Distance Made In Defense',
            frName: 'Distance Totale Parcourue En Défense',
            engName: 'Total Distance Made In Defense',
            frDesc: 'distance totale parcourue en défense par une équipe',
            engDesc: 'average distance made in defense by a team',
            chName: '防守距离',
            chDesc: '防守时平均移动距离',
            cellFilter: 'toDistance',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'tm_dist_min_tavg',
            headerTooltip: 'distance moyenne au plus proche coequipier ',
            displayName: 'Distance To The Nearest Team-Mate',
            frName: 'Distance Moyenne Au Plus Proche Coequipier',
            engName: 'Distance To The Nearest Team-Mate',
            frDesc: 'distance moyenne au plus proche coequipier ',
            engDesc: 'average distance to the nearest team-mate',
            chName: '最近队友的距离',
            chDesc: '距离最近的队友的平均距离',
            cellFilter: 'toDistance',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'tm_dist_min_tavg_defense',
            headerTooltip: 'distance moyenne au plus proche coequipier en situation de défense',
            displayName: 'Distance To The Nearest Team-Mate In Defense',
            frName: 'Distance Moyenne Au Plus Proche Coequipier En Situation De Défense',
            engName: 'Distance To The Nearest Team-Mate In Defense',
            frDesc: 'distance moyenne au plus proche coequipier en situation de défense',
            engDesc: 'average distance to the nearest team-mate during a defense time',
            chName: '防守状态下最近队友的距离',
            chDesc: '球队防守状态下最近队友的平均距离',
            cellFilter: 'toDistance',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'sl_tm_dist_min_tavg_defense',
            headerTooltip: 'distance moyenne au plus proche coequipier sur la même ligne en défense ',
            displayName: 'Distance To The Nearest Team-Mate On The Same Line In Defense',
            frName: 'Distance Au Plus Proche Coéquipier Sur La Même Ligne En Défense',
            engName: 'Distance To The Nearest Team-Mate On The Same Line In Defense',
            frDesc: 'distance moyenne au plus proche coequipier sur la même ligne en défense ',
            engDesc: 'average distance to the nearest teammate on the same line of defense',
            chName: '同行防守状态下最近队友的距离',
            chDesc: '球队在同行防守状态下最近队友的平均距离',
            cellFilter: 'toDistance',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'sl_tm_dist_min_tavg_attack',
            headerTooltip: 'distance moyenne au plus proche coequipier sur la même ligne en attaque',
            displayName: 'Distance To The Nearest Team-Mate On The Same Line In Attaque',
            frName: 'Distance Au Plus Proche Coéquipier Sur La Même Ligne En  Attaque',
            engName: 'Distance To The Nearest Team-Mate On The Same Line In Attaque',
            frDesc: 'distance moyenne au plus proche coequipier sur la même ligne en attaque',
            engDesc: 'average distance to the nearest teammate on the same line of attack',
            chName: '同行进攻状态下最近队友的距离',
            chDesc: '球队在同行进攻状态下最近队友的平均距离',
            cellFilter: 'toDistance',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'sl_tm_dist_min_tavg',
            headerTooltip: 'distance moyenne au plus proche coequipier sur la même ligne',
            displayName: 'Distance To The Nearest Team-Mate On The Same Line',
            frName: 'Distance Au Plus Proche Coéquipier Sur La Même Ligne',
            engName: 'Distance To The Nearest Team-Mate On The Same Line',
            frDesc: 'distance moyenne au plus proche coequipier sur la même ligne',
            engDesc: 'average distance to the nearest teammate on the same line ',
            chName: '同行中与队友最近的球员',
            chDesc: '在同行中，与最近队友的平均距离',
            cellFilter: 'toDistance',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'opp_dist_min_tavg',
            headerTooltip: 'distance moyenne de marquage au plus proche adversaire',
            displayName: 'Opponent Distance',
            frName: 'Distance De Marquage',
            engName: 'Opponent Distance',
            frDesc: 'distance moyenne de marquage au plus proche adversaire',
            engDesc: 'average distance of close marking to the nearest opponent',
            chName: '对面距离',
            cellFilter: 'toDistance',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'opp_dist_min_tavg_attack',
            headerTooltip: 'distance moyenne de marquage au plus proche adversaire en situation d\'attaque',
            displayName: 'Opponent Distance In Attack',
            frName: 'Distance De Marquage En Attaque',
            engName: 'Opponent Distance In Attack',
            frDesc: 'distance moyenne de marquage au plus proche adversaire en situation d\'attaque',
            engDesc: 'average distance of close marking to the nearest opponent during a attack time',
            chName: '进攻中对方球队的距离',
            chDesc: '在进攻时间中，最近的防守球员接近的平均距离',
            cellFilter: 'toDistance',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'avg_bv_x',
            headerTooltip: 'position moyenne sur le terrain en hauteur',
            displayName: 'Average Position  Height',
            frName: 'Position Moyenne Sur Le Terrain En Hauteur',
            engName: 'Average Position  Height',
            frDesc: 'position moyenne sur le terrain en hauteur',
            engDesc: 'height position on the pitch',
            chName: '球场的平均长度',
            chDesc: '球场的平均长度',
            cellFilter: 'toNumber',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'avg_bv_y',
            headerTooltip: 'position moyenne sur le terrain en largeur ',
            displayName: 'Average Position  Width',
            frName: 'Position Moyenne Sur Le Terrain En Largeur ',
            engName: 'Average Position  Width',
            frDesc: 'position moyenne sur le terrain en largeur ',
            engDesc: 'width position on the pitch',
            chName: '球场的平均宽度',
            chDesc: '球场的平均宽度',
            cellFilter: 'toNumber',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'avg_bv_attack_x',
            headerTooltip: 'position moyenne sur le terrain en hauteur en attaque',
            displayName: 'Average Position  Height In Attack',
            frName: 'Position Moyenne Sur Le Terrain En Hauteur En Attaque',
            engName: 'Average Position  Height In Attack',
            frDesc: 'position moyenne sur le terrain en hauteur en attaque',
            engDesc: 'height position on the pitch in attack',
            chName: '进攻中平均高度',
            chDesc: '进攻中的平均高度',
            cellFilter: 'toNumber',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'avg_bv_attack_y',
            headerTooltip: 'position moyenne sur le terrain en largeur en attaque',
            displayName: 'Average Position  Widht In Attack',
            frName: 'Position Moyenne Sur Le Terrain En Largeur En Attaque',
            engName: 'Average Position  Widht In Attack',
            frDesc: 'position moyenne sur le terrain en largeur en attaque',
            engDesc: 'width position on the pitch in attack',
            chName: '进攻中的平均宽度',
            chDesc: '进攻中的平均宽度',
            cellFilter: 'toNumber',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'avg_bv_defense_x',
            headerTooltip: 'position moyenne sur le terrain en hauteur en défense',
            displayName: 'Average Position  Height In Defense',
            frName: 'Position Moyenne Sur Le Terrain En Hauteur En Défense',
            engName: 'Average Position  Height In Defense',
            frDesc: 'position moyenne sur le terrain en hauteur en défense',
            engDesc: 'height position on the pitch in defense',
            chName: '防守中的平均长度',
            chDesc: '防守中的平均长度',
            cellFilter: 'toNumber',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'avg_bv_defense_y',
            headerTooltip: 'position moyenne sur le terrain en largeur en défense',
            displayName: 'Average Position  Widht In Defense',
            frName: 'Position Moyenne Sur Le Terrain En Largeur En Défense',
            engName: 'Average Position  Widht In Defense',
            frDesc: 'position moyenne sur le terrain en largeur en défense',
            engDesc: 'width position on the pitch in defense',
            chName: '防守中的平均宽度',
            chDesc: '防守中的平均宽度',
            cellFilter: 'toNumber',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'goal_dist_avg_tavg_attack',
            headerTooltip: 'distance moyenne l\'équipe au but adversaire en situation d\'attaque',
            displayName: 'Average Distance To The Goal In Attack',
            frName: 'Distance Moyenne Du But De L\'Équipe En Situation D\'Attaque',
            engName: 'Average Distance To The Goal In Attack',
            frDesc: 'distance moyenne l\'équipe au but adversaire en situation d\'attaque',
            engDesc: 'average distance of the team to the away team goal in attack',
            chName: '进攻球离球门的距离',
            chDesc: '进攻球离球门的距离',
            cellFilter: 'toDistance',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'shot_from_box',
            headerTooltip: 'tirs effectués par une équipe avec une tentavive de but depuis la surface',
            displayName: 'Shot From Bow',
            frName: 'Tentavive De But Depuis La Surface',
            engName: 'Shot From Bow',
            frDesc: 'tirs effectués par une équipe avec une tentavive de but depuis la surface',
            engDesc: 'shot made by a team to the goal in the penalty aera',
            chName: '角球',
            chDesc: '角球',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'shot_from_box_ot',
            headerTooltip: 'tirs ou frappes effectués par une équipe depuis la surface avec une trajectoire vers l\'intérieur du but',
            displayName: 'Shot From Box On Target',
            frName: 'Tentative De But Cadré Depuis La Surface',
            engName: 'Shot From Box On Target',
            frDesc: 'tirs ou frappes effectués par une équipe depuis la surface avec une trajectoire vers l\'intérieur du but',
            engDesc: 'shot made by a team in the penalty area in direction to the away goal',
            chName: '角球目标',
            chDesc: '角球目标',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'shot_pressure',
            headerTooltip: 'tirs effectués par une équipe sous pression de l\'équipe adversaire',
            displayName: 'Shot Pressure',
            frName: 'Tir Sous Pression',
            engName: 'Shot Pressure',
            frDesc: 'tirs effectués par une équipe sous pression de l\'équipe adversaire',
            engDesc: 'shot made by team under the pressure of the opponent team',
            chName: '射门防守',
            chDesc: '射门防守',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'ncross_in_thebox',
            headerTooltip: 'envoyer le ballon dans la surface de réparation depuis les côtés',
            displayName: 'Cross In The Box',
            frName: 'Centre Dans La Surface',
            engName: 'Cross In The Box',
            frDesc: 'envoyer le ballon dans la surface de réparation depuis les côtés',
            engDesc: 'send the ball into the penalty area from the sides',
            chName: '角球',
            chDesc: '角球',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'ball_drive_pressure',
            headerTooltip: 'conduite de balle d\'un joueur sous pression de l\'équipe adversaire',
            displayName: 'Ball Drive Pressure',
            frName: 'Conduite De Balle Sous Pression',
            engName: 'Ball Drive Pressure',
            frDesc: 'conduite de balle d\'un joueur sous pression de l\'équipe adversaire',
            engDesc: 'ball drive of player under the pressure of the away team',
            chName: '运球防守',
            chDesc: '运球防守',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'ball_drive_bmd',
            headerTooltip: 'conduite de balle d\'un joueur entre la ligne milieu et la ligne de défense',
            displayName: 'Ball Drive Between Middle And Defense ',
            frName: 'Conduite De Balle Entre La Ligne Milieu Et La Ligne De Défense Adverse',
            engName: 'Ball Drive Between Middle And Defense ',
            frDesc: 'conduite de balle d\'un joueur entre la ligne milieu et la ligne de défense',
            engDesc: 'ball drive of a player between the middle line and the defense line',
            chName: '防守和中间的运球',
            chDesc: '防守和中间的运球',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'ball_drive_pressure_rate',
            headerTooltip: 'conduite de balle réussie d\'un joueur sous pression',
            displayName: 'Successfull Ball Drive Under Pressure',
            frName: '% Réussi De Conduite De Balle Sous Pression',
            engName: 'Successfull Ball Drive Under Pressure',
            frDesc: 'conduite de balle réussie d\'un joueur sous pression',
            engDesc: 'successful ball drive of a player under pressure',
            chName: '防守下运球成功',
            chDesc: '防守下运球成功',
            cellFilter: 'toPercentOnly',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'ball_drive_bmd_rate',
            headerTooltip: 'conduite de balle réussie d\'un joueur entre la ligne du milieu et la ligne d\'attaque',
            displayName: 'Successfull Ball Drive Between The Middle And The Attack',
            frName: '% Réussi De Conduite De Balle Entre La Ligne De Milieu Et La Ligne D\'Attaque',
            engName: 'Successfull Ball Drive Between The Middle And The Attack',
            frDesc: 'conduite de balle réussie d\'un joueur entre la ligne du milieu et la ligne d\'attaque',
            engDesc: 'successful ball drive of a player between the middle line and the attack line',
            chName: '在进攻和间歇时运球成功',
            chDesc: '在进攻和间歇时运球成功',
            cellFilter: 'toPercentOnly',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'at_header',
            headerTooltip: 'tête d\'un joueur en situation d\'attaque',
            displayName: 'Header In Attack',
            frName: 'Tête En Situation D\'Attaque',
            engName: 'Header In Attack',
            frDesc: 'tête d\'un joueur en situation d\'attaque',
            engDesc: 'header of a player in attack',
            chName: '头球',
            chDesc: '球员进攻时头球的个数',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'at_header_rate',
            headerTooltip: 'tête d\'un joueur réussie en situation d\'attaque',
            displayName: 'Successful Headerin Attack',
            frName: 'Tête En Situation D\'Attaque Réussie',
            engName: 'Successful Headerin Attack',
            frDesc: 'tête d\'un joueur réussie en situation d\'attaque',
            engDesc: 'successful header of a player in attack',
            chName: '头球成功率',
            chDesc: '球员进攻时头球成功的个数',
            cellFilter: 'toPercentOnly',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'def_header',
            headerTooltip: 'tête d\'un joueur en situation de défense',
            displayName: 'Successful Header In Defense',
            frName: 'Tête En Situation De Défense',
            engName: 'Successful Header In Defense',
            frDesc: 'tête d\'un joueur en situation de défense',
            engDesc: 'header of a player in defense',
            chName: '防守头球成功',
            chDesc: '球员进攻时头球成功的个数',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'foul_contact',
            headerTooltip: 'faute d\'un joueur sur un autre joueur de l\'équipe adversaire',
            displayName: 'Foul Contact',
            frName: 'Faute',
            engName: 'Foul Contact',
            frDesc: 'faute d\'un joueur sur un autre joueur de l\'équipe adversaire',
            engDesc: 'foul contact of a player on an opponent ',
            chName: '犯规',
            chDesc: '犯规',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'foul_offside',
            headerTooltip: 'un joueur se trouve en position de hors jeu si, au moment où le ballon est joué par un coéquipier, il est hors de sa moitié de terrain et que n\'importe quelle partie de sa tête, de son corps ou de ses jambes est plus près de la ligne de but adverse que le ballon et l\'avant dernier adversaire',
            displayName: 'Foul Offside',
            frName: 'Hors Jeu',
            engName: 'Foul Offside',
            frDesc: 'un joueur se trouve en position de hors jeu si, au moment où le ballon est joué par un coéquipier, il est hors de sa moitié de terrain et que n\'importe quelle partie de sa tête, de son corps ou de ses jambes est plus près de la ligne de but adverse que le ballon et l\'avant dernier adversaire',
            engDesc: 'a player is in an offside position if he is in the opposing team\'s half of the field and is also "nearer to his opponents\' goal line than both the ball and the second-last opponent. being "nearer to an opponent\'s goal line" meant that "any part of his head, body or feet is nearer to his opponents\' goal line than both the ball and the second-last opponent',
            chName: '越位',
            chDesc: '越位',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'ball_touched',
            headerTooltip: 'ballons touchés par l\'équipe',
            displayName: 'Ball Touched ',
            frName: 'Ballons Touchés',
            engName: 'Ball Touched ',
            frDesc: 'ballons touchés par l\'équipe',
            engDesc: 'ball touched by the team',
            chName: '控球率',
            chDesc: '控球率',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'pass_dist_avg',
            headerTooltip: 'distance de passe moyenne pour une équipe',
            displayName: 'Pass Distance Average',
            frName: 'Distance De Passe Moyenne',
            engName: 'Pass Distance Average',
            frDesc: 'distance de passe moyenne pour une équipe',
            engDesc: 'average distance pass for a team',
            chName: '平均过人距离',
            chDesc: '平均过人距离',
            cellFilter: 'toDistance',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'pass_dxdist_avg',
            headerTooltip: 'distance gagné par une équipe grâce aux passes',
            displayName: 'Distance Gained Per Pass',
            frName: 'Distance Gagné Par Passe',
            engName: 'Distance Gained Per Pass',
            frDesc: 'distance gagné par une équipe grâce aux passes',
            engDesc: 'average distance gained for a team thanks to pass',
            chName: '每次过人的推进距离',
            chDesc: '每次过人的推进距离',
            cellFilter: 'toDistance',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'pass_pressure_dxdist_avg',
            headerTooltip: 'distance gagné par une équipe grâce aux passes, en passes sous pression',
            displayName: 'Distance Gained Per Pass Under Pressure',
            frName: 'Distance Gagné Par Passe Sous Pression',
            engName: 'Distance Gained Per Pass Under Pressure',
            frDesc: 'distance gagné par une équipe grâce aux passes, en passes sous pression',
            engDesc: 'average distance gained for a team thanks to pass under pressure',
            chName: '防守下每次过人的推进距离',
            chDesc: '防守下每次过人的推进距离',
            cellFilter: 'toDistance',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'bd_dist_avg',
            headerTooltip: 'distance moyenne parcourue en conduite de balle',
            displayName: 'Average Distance By Ball Drive',
            frName: 'Distance Moyenne Parcourue Par Conduite De Balle',
            engName: 'Average Distance By Ball Drive',
            frDesc: 'distance moyenne parcourue en conduite de balle',
            engDesc: 'average distance made in ball drive',
            chName: '运球平均距离',
            chDesc: '运球平均距离',
            cellFilter: 'toDistance',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'bd_dxdist_avg',
            headerTooltip: 'distance moyenne gagné par l\'équipe en conduite de balle',
            displayName: 'Average Distance Gained By Ball Drive',
            frName: 'Distance Moyenne Gagné Par Conduite De Balle',
            engName: 'Average Distance Gained By Ball Drive',
            frDesc: 'distance moyenne gagné par l\'équipe en conduite de balle',
            engDesc: 'average distance gained by the team by a ball drive',
            chName: '运球推进平均距离',
            chDesc: '运球推进平均距离',
            cellFilter: 'toDistance',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'bd_beat_def_avg',
            headerTooltip: 'nb d\'adversaire éliminé suite à conduite de balle de l\'équipe',
            displayName: 'Number Of Opponent Eliminate By Ball Drive',
            frName: 'Nb D\'Adversaire Éliminé Par Conduite De Balle',
            engName: 'Number Of Opponent Eliminate By Ball Drive',
            frDesc: 'nb d\'adversaire éliminé suite à conduite de balle de l\'équipe',
            engDesc: 'number of opponent eliminate after a ball drive',
            chName: '运球摆脱防守球员',
            chDesc: '运球摆脱防守球员',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'clean_intercp',
            headerTooltip: 'interception d\'un joueur sur un joueur adversaire sans faute',
            displayName: 'Interception Without Foul',
            frName: 'Interception Sans Faute',
            engName: 'Interception Without Foul',
            frDesc: 'interception d\'un joueur sur un joueur adversaire sans faute',
            engDesc: 'interception by the team on the other team wihout foul',
            chName: '无犯规抢断',
            chDesc: '无犯规抢断',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'pass_intercep',
            headerTooltip: 'interception d\'une passe ou d\'un centre par un joueur de l\'équipe adverse',
            displayName: 'Interception Pass Or Cross',
            frName: 'Interception Passe Ou De Centre',
            engName: 'Interception Pass Or Cross',
            frDesc: 'interception d\'une passe ou d\'un centre par un joueur de l\'équipe adverse',
            engDesc: 'interception of a pass or a cross by the team',
            chName: '传球或过人抢断',
            chDesc: '传球或过人抢断',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'dribl_intercep',
            headerTooltip: 'interception d\'un dribble par un joueur de l\'équipe adverse',
            displayName: 'Interception Dribble',
            frName: 'Interception Dribble',
            engName: 'Interception Dribble',
            frDesc: 'interception d\'un dribble par un joueur de l\'équipe adverse',
            engDesc: 'interception by a player after a dribble of an opponent',
            chName: '运球抢断',
            chDesc: '运球抢断',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'foul',
            headerTooltip: 'fautes pour contestation',
            displayName: 'Foul',
            frName: 'Fautes',
            engName: 'Foul',
            frDesc: 'fautes pour contestation',
            engDesc: 'foul by contestation',
            chName: '犯规',
            chDesc: '犯规',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'shot_pressure_ot',
            headerTooltip: 'tirs ou frappes sous pression avec une trajectoire vers l\'intérieur du but',
            displayName: 'Shot On The Target Under Pressure',
            frName: 'Tirs Sous Pression Cadrés',
            engName: 'Shot On The Target Under Pressure',
            frDesc: 'tirs ou frappes sous pression avec une trajectoire vers l\'intérieur du but',
            engDesc: 'shot on target under pressure',
            chName: '防守射门',
            chDesc: '防守射门',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'n_opp_on_press_avg_a',
            headerTooltip: 'nombre de pressing subit par l\'équipe par l\'équipe adverse',
            displayName: 'Number Of Pressing Against The Team',
            frName: 'Nb De Pressing Subit',
            engName: 'Number Of Pressing Against The Team',
            frDesc: 'nombre de pressing subit par l\'équipe par l\'équipe adverse',
            engDesc: 'number of pressing on the team ',
            chName: '对球队防守的次数',
            chDesc: '对球队防守的次数',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'bd_dist_without_pressure_a',
            headerTooltip: 'distance parcourue par l\'équipe avec le ballon sans pression',
            displayName: 'Distance Made Between Without Pressing',
            frName: 'Distance Parcourue Sans Pressing',
            engName: 'Distance Made Between Without Pressing',
            frDesc: 'distance parcourue par l\'équipe avec le ballon sans pression',
            engDesc: 'ball drive distance without pressure',
            chName: '无防守推进距离',
            chDesc: '无防守推进距离',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'n_opp_on_press_avg_d',
            headerTooltip: 'nombre de pressing effectué par l\'équipe',
            displayName: 'Number Of Pressing Made',
            frName: 'Nb De Pressing Effectué',
            engName: 'Number Of Pressing Made',
            frDesc: 'nombre de pressing effectué par l\'équipe',
            engDesc: 'number of pressing made by the team',
            chName: '防守次数',
            chDesc: '防守次数',
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: numberAggreg
        }, {
            field: 'bd_dist_without_pressure_d',
            headerTooltip: 'distance parcourue par l\'adveraire sans pressing',
            displayName: 'Distance Made By The Opponent Between Two Pressing',
            frName: 'Distance Parcoue Par L\'Adveraire Entre 2 Pressing',
            engName: 'Distance Made By The Opponent Between Two Pressing',
            frDesc: 'distance parcourue par l\'adveraire sans pressing',
            engDesc: 'distance made by the away team without pressure',
            chName: '两次防守的推进距离',
            chDesc: '两次防守的推进距离',
            cellFilter: 'toDistance',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'ball_recovery_avg_height_m',
            headerTooltip: 'hauteur moyenne de récupération du ballon par l\'équipe',
            displayName: 'Ball Recovery Average Height',
            frName: 'Hauteur Moyenne De Récupération Du Ballon',
            engName: 'Ball Recovery Average Height',
            frDesc: 'hauteur moyenne de récupération du ballon par l\'équipe',
            engDesc: 'average height  of the recovery of the ball by the team',
            chName: '球恢复的平均高度',
            chDesc: '球恢复的平均高度',
            cellFilter: 'toNumber',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'ball_recovery_avg_duration_sec',
            headerTooltip: 'temps moyen de récupération du ballon par l\'équioe',
            displayName: 'Ball Recovery Average Duration Seconde',
            frName: 'Temps Moyen De Récupération Du Ballon',
            engName: 'Ball Recovery Average Duration Seconde',
            frDesc: 'temps moyen de récupération du ballon par l\'équioe',
            engDesc: 'average time of the recovery of the ball by the team',
            chName: '球恢复的秒数',
            chDesc: '球恢复的秒数',
            cellFilter: 'toSecond',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'seq_avg_x_ball_loss',
            headerTooltip: 'hauteur moyenne de perte de balle par l\'équipe',
            displayName: 'Height Average Ball Loss',
            frName: 'Hauteur Moyenne De Perte De Balle',
            engName: 'Height Average Ball Loss',
            frDesc: 'hauteur moyenne de perte de balle par l\'équipe',
            engDesc: 'average height  of the loose of the ball by the team',
            chName: '平均失球高度',
            chDesc: '平均失球高度',
            cellFilter: 'toNumber',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'seq_avg_duration_sec',
            headerTooltip: 'durée moyenne de possesssion du ballon par l\'équipe',
            displayName: 'Average Duration Seconde Possession',
            frName: 'Durée Moyenne De Possesssion',
            engName: 'Average Duration Seconde Possession',
            frDesc: 'durée moyenne de possesssion du ballon par l\'équipe',
            engDesc: 'average possession of the ball by the team',
            chName: '控球平均秒数',
            chDesc: '控球平均秒数',
            cellFilter: 'toSecond',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'seq_avg_dist_gained',
            headerTooltip: 'distance moyenne gagné par l\'équipe par séquence de possession de ballon',
            displayName: 'Average Distance Gained',
            frName: 'Distance Moyenne Gagné Par Séquence De Possession',
            engName: 'Average Distance Gained',
            frDesc: 'distance moyenne gagné par l\'équipe par séquence de possession de ballon',
            engDesc: 'average distance gained by the team by ball drive',
            chName: '平均推进距离',
            chDesc: '平均推进距离',
            cellFilter: 'toDistance',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }, {
            field: 'pct_dangerous_seq',
            headerTooltip: 'séquence de possession de ballon par l\'équipe qui conduit à une occassion dangeureuse sur le but adverse',
            displayName: 'Dangerous Possession',
            frName: 'Pourcentage De Séquence De Possession Qui Conduit À Une Occassion Dangeureuse',
            engName: 'Dangerous Possession',
            frDesc: 'séquence de possession de ballon par l\'équipe qui conduit à une occassion dangeureuse sur le but adverse',
            engDesc: 'ball possession sequence by the team which create a dangerous occassion ',
            chName: '危险的控球',
            chDesc: '危险的控球',
            cellFilter: 'toPercentOnly',
            filterCellFiltered: true,
            sortCellFiltered: true,
            width: 100,
            filter: {
                condition: customFilterCondition
            },
            treeAggregationType: 'avg',
            customTreeAggregationFinalizerFn: rowValueAggregation
        }


    ];


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
                obj.displayName = obj.engName;
            }
            break;
        case "Français":
            if (obj.displayName) {
                obj.displayName = obj.frName;
            }
            break;
        case "简体中文":
            if (obj.displayName) {
                obj.displayName = obj.chName;
            }
            break;
        default:

    }
}

(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('begin', x, this);
                    k['call'](this);
                };
                w['bind']('begin', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"mouseWheelEnabled":true,"verticalAlign":"top","scrollBarWidth":10,"gap":10,"id":"rootPlayer","vrPolyfillScale":0.75,"width":"100%","definitions": [{"overlays":["this.overlay_C5456CB4_CBFE_90CC_41B1_BD43B908694D"],"thumbnailUrl":"media/panorama_C13DF865_CBF2_B04C_41D8_3AE1CF3232B1_t.jpg","hfov":360,"label":trans('panorama_C13DF865_CBF2_B04C_41D8_3AE1CF3232B1.label'),"hfovMax":130,"id":"panorama_C13DF865_CBF2_B04C_41D8_3AE1CF3232B1","adjacentPanoramas":[{"distance":6.12,"class":"AdjacentPanorama","select":"this.overlay_C5456CB4_CBFE_90CC_41B1_BD43B908694D.get('areas').forEach(function(a){ a.trigger('click') })","yaw":-150.87,"panorama":"this.panorama_C7F19D88_CBF7_90C4_41D9_93F200BE9290","backwardYaw":-50.13}],"pitch":0,"hfovMin":"120%","partial":false,"class":"Panorama","data":{"label":"0M.1"},"frames":[{"thumbnailUrl":"media/panorama_C13DF865_CBF2_B04C_41D8_3AE1CF3232B1_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_C13DF865_CBF2_B04C_41D8_3AE1CF3232B1_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":18432,"rowCount":6,"tags":"ondemand","colCount":36,"height":3072},{"url":"media/panorama_C13DF865_CBF2_B04C_41D8_3AE1CF3232B1_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":9216,"rowCount":3,"tags":"ondemand","colCount":18,"height":1536},{"url":"media/panorama_C13DF865_CBF2_B04C_41D8_3AE1CF3232B1_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":6144,"rowCount":2,"tags":"ondemand","colCount":12,"height":1024},{"url":"media/panorama_C13DF865_CBF2_B04C_41D8_3AE1CF3232B1_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":3072,"rowCount":1,"tags":["ondemand","preload"],"colCount":6,"height":512},{"url":"media/panorama_C13DF865_CBF2_B04C_41D8_3AE1CF3232B1_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","width":9216,"rowCount":1,"tags":"mobilevr","colCount":6,"height":1536}]}}],"vfov":180},{"subtitlesTextShadowColor":"#000000","toolTipTextShadowColor":"#000000","id":"MainViewer","width":"100%","toolTipFontWeight":"normal","progressBackgroundColorDirection":"vertical","toolTipShadowVerticalLength":0,"progressBackgroundOpacity":1,"subtitlesPaddingBottom":5,"playbackBarProgressBackgroundColorDirection":"vertical","toolTipTextShadowOpacity":0,"displayTooltipInSurfaceSelection":true,"toolTipShadowHorizontalLength":0,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"transitionMode":"blending","playbackBarHeight":10,"toolTipDisplayTime":600,"playbackBarHeadBackgroundColorDirection":"vertical","progressBorderColor":"#000000","transitionDuration":500,"toolTipShadowSpread":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesBorderColor":"#FFFFFF","playbackBarProgressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","toolTipFontColor":"#606060","playbackBarBackgroundColorDirection":"vertical","subtitlesTextDecoration":"none","progressOpacity":1,"playbackBarHeadWidth":6,"subtitlesTextShadowBlurRadius":0,"subtitlesFontFamily":"Arial","progressBackgroundColor":["#FFFFFF"],"playbackBarRight":0,"toolTipPaddingLeft":6,"playbackBarProgressBorderRadius":0,"borderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"height":"100%","progressBarOpacity":1,"subtitlesShadow":false,"surfaceReticleSelectionOpacity":1,"subtitlesPaddingTop":5,"progressBottom":0,"toolTipFontSize":"1.11vmin","playbackBarHeadShadowOpacity":0.7,"doubleClickAction":"toggle_fullscreen","subtitlesGap":0,"subtitlesOpacity":1,"class":"ViewerArea","subtitlesBackgroundColor":"#000000","subtitlesTextShadowHorizontalLength":1,"toolTipFontStyle":"normal","playbackBarHeadShadowBlurRadius":3,"playbackBarHeadShadowHorizontalLength":0,"shadow":false,"progressHeight":10,"playbackBarProgressBackgroundColorRatios":[0],"progressBackgroundColorRatios":[0],"subtitlesVerticalAlign":"bottom","progressBarBorderRadius":0,"toolTipOpacity":1,"progressBorderSize":0,"toolTipFontFamily":"Arial","subtitlesTextShadowOpacity":1,"playbackBarBorderColor":"#FFFFFF","firstTransitionDuration":0,"surfaceReticleColor":"#FFFFFF","progressBarBorderSize":0,"playbackBarBorderRadius":0,"vrPointerSelectionColor":"#FF6600","subtitlesHorizontalAlign":"center","playbackBarHeadHeight":15,"progressBarBackgroundColorDirection":"vertical","playbackBarLeft":0,"subtitlesBorderSize":0,"playbackBarHeadShadowColor":"#000000","toolTipPaddingBottom":4,"playbackBarHeadShadowVerticalLength":0,"displayTooltipInTouchScreens":true,"paddingLeft":0,"toolTipBorderSize":1,"propagateClick":false,"toolTipPaddingTop":4,"borderSize":0,"toolTipBorderColor":"#767676","playbackBarBackgroundOpacity":1,"vrPointerSelectionTime":2000,"subtitlesFontColor":"#FFFFFF","paddingRight":0,"toolTipShadowBlurRadius":3,"playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipShadowOpacity":1,"subtitlesTextShadowVerticalLength":1,"surfaceReticleOpacity":0.6,"playbackBarHeadBorderRadius":0,"toolTipPaddingRight":6,"playbackBarProgressOpacity":1,"playbackBarHeadOpacity":1,"playbackBarHeadBorderColor":"#000000","toolTipShadowColor":"#333333","progressBarBorderColor":"#000000","paddingTop":0,"progressBorderRadius":0,"subtitlesFontWeight":"normal","subtitlesEnabled":true,"subtitlesPaddingLeft":5,"progressLeft":0,"playbackBarBorderSize":0,"minHeight":50,"playbackBarHeadShadow":true,"progressRight":0,"minWidth":100,"paddingBottom":0,"toolTipBorderRadius":3,"playbackBarOpacity":1,"toolTipHorizontalAlign":"center","playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesBottom":50,"toolTipTextShadowBlurRadius":3,"subtitlesPaddingRight":5,"vrPointerColor":"#FFFFFF","playbackBarBottom":5,"subtitlesTop":0,"progressBarBackgroundColorRatios":[0],"toolTipBackgroundColor":"#F6F6F6","data":{"name":"Main Viewer"}},{"overlays":["this.overlay_C64BE27A_CBFD_7044_41C5_F0065EE18820","this.overlay_C5B8EC07_CBFF_77CB_41E0_CFA88F9887D3"],"thumbnailUrl":"media/panorama_C7F19D88_CBF7_90C4_41D9_93F200BE9290_t.jpg","hfov":360,"label":trans('panorama_C7F19D88_CBF7_90C4_41D9_93F200BE9290.label'),"hfovMax":130,"id":"panorama_C7F19D88_CBF7_90C4_41D9_93F200BE9290","adjacentPanoramas":[{"distance":8.55,"class":"AdjacentPanorama","select":"this.overlay_C5B8EC07_CBFF_77CB_41E0_CFA88F9887D3.get('areas').forEach(function(a){ a.trigger('click') })","yaw":-50.13,"panorama":"this.panorama_C13DF865_CBF2_B04C_41D8_3AE1CF3232B1","backwardYaw":-150.87}],"pitch":0,"hfovMin":"120%","partial":false,"class":"Panorama","data":{"label":"0M.01"},"frames":[{"thumbnailUrl":"media/panorama_C7F19D88_CBF7_90C4_41D9_93F200BE9290_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_C7F19D88_CBF7_90C4_41D9_93F200BE9290_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":18432,"rowCount":6,"tags":"ondemand","colCount":36,"height":3072},{"url":"media/panorama_C7F19D88_CBF7_90C4_41D9_93F200BE9290_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":9216,"rowCount":3,"tags":"ondemand","colCount":18,"height":1536},{"url":"media/panorama_C7F19D88_CBF7_90C4_41D9_93F200BE9290_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":6144,"rowCount":2,"tags":"ondemand","colCount":12,"height":1024},{"url":"media/panorama_C7F19D88_CBF7_90C4_41D9_93F200BE9290_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":3072,"rowCount":1,"tags":["ondemand","preload"],"colCount":6,"height":512},{"url":"media/panorama_C7F19D88_CBF7_90C4_41D9_93F200BE9290_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","width":9216,"rowCount":1,"tags":"mobilevr","colCount":6,"height":1536}]}}],"vfov":180},{"initialSequence":"this.sequence_C10913EC_CBF2_905C_41C0_6C7EA8977AA2","class":"PanoramaCamera","id":"panorama_C7F19D88_CBF7_90C4_41D9_93F200BE9290_camera","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"initialSequence":"this.sequence_C11583ED_CBF2_905C_41E4_FFA766856B0F","class":"PanoramaCamera","id":"panorama_C13DF865_CBF2_B04C_41D8_3AE1CF3232B1_camera","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"items":[{"camera":"this.panorama_C7F19D88_CBF7_90C4_41D9_93F200BE9290_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","media":"this.panorama_C7F19D88_CBF7_90C4_41D9_93F200BE9290","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_C13DF865_CBF2_B04C_41D8_3AE1CF3232B1_camera","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","media":"this.panorama_C13DF865_CBF2_B04C_41D8_3AE1CF3232B1","player":"this.MainViewerPanoramaPlayer"}],"id":"mainPlayList","class":"PlayList"},{"zoomEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","arrowKeysAction":"translate","displayPlaybackBar":true,"surfaceSelectionEnabled":false},{"maps":[],"areas":["this.HotspotPanoramaOverlayArea_C5454CB4_CBFE_90CC_41E4_57039E00B945"],"rollOverDisplay":false,"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"data":{"label":"Circle 03b"},"hfov":17.83,"image":"this.AnimatedImageResource_C426FA85_CBD2_90CE_41E5_B83774040A24","pitch":-15.51,"yaw":-150.87,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","verticalAlign":"middle","distance":100,"vfov":7.26}],"id":"overlay_C5456CB4_CBFE_90CC_41B1_BD43B908694D","data":{"label":"Circle 03b","hasPanoramaAction":true},"enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_C5EB12CC_CBFD_705C_41D5_D4A62EAEB419"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"Circle 03b"},"useHandCursor":true,"items":[{"data":{"label":"Circle 03b"},"hfov":6.39,"image":"this.AnimatedImageResource_C4277A85_CBD2_90CE_4162_0C5258531535","pitch":-69.78,"yaw":20.22,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","verticalAlign":"middle","distance":100,"vfov":2.61}],"id":"overlay_C64BE27A_CBFD_7044_41C5_F0065EE18820","rollOverDisplay":false,"enabledInCardboard":true},{"maps":[],"areas":["this.HotspotPanoramaOverlayArea_C5BDEC08_CBFF_77C5_41E0_5D2859490ED7"],"rollOverDisplay":false,"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"data":{"label":"Circle 03b"},"hfov":18.14,"image":"this.AnimatedImageResource_C4272A85_CBD2_90CE_41E1_8E8136369FF9","pitch":-11.24,"yaw":-50.13,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","verticalAlign":"middle","distance":100,"vfov":7.39}],"id":"overlay_C5B8EC07_CBFF_77CB_41E0_CFA88F9887D3","data":{"label":"Circle 03b","hasPanoramaAction":true},"enabledInCardboard":true},{"movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_C10913EC_CBF2_905C_41C0_6C7EA8977AA2","restartMovementOnUserInteraction":false},{"movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_C11583ED_CBF2_905C_41E4_FFA766856B0F","restartMovementOnUserInteraction":false},{"click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_C5454CB4_CBFE_90CC_41E4_57039E00B945","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"rowCount":6,"colCount":4,"class":"AnimatedImageResource","levels":[{"url":"media/res_C4542BC2_CBF2_9044_41D9_BDE60DEBC813_0.png","width":1080,"class":"ImageResourceLevel","height":660}],"frameDuration":41,"id":"AnimatedImageResource_C426FA85_CBD2_90CE_41E5_B83774040A24","frameCount":24},{"id":"HotspotPanoramaOverlayArea_C5EB12CC_CBFD_705C_41D5_D4A62EAEB419","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"rowCount":6,"colCount":4,"class":"AnimatedImageResource","levels":[{"url":"media/res_C4542BC2_CBF2_9044_41D9_BDE60DEBC813_0.png","width":1080,"class":"ImageResourceLevel","height":660}],"frameDuration":41,"id":"AnimatedImageResource_C4277A85_CBD2_90CE_4162_0C5258531535","frameCount":24},{"click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_C5BDEC08_CBFF_77C5_41E0_5D2859490ED7","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"rowCount":6,"colCount":4,"class":"AnimatedImageResource","levels":[{"url":"media/res_C4542BC2_CBF2_9044_41D9_BDE60DEBC813_0.png","width":1080,"class":"ImageResourceLevel","height":660}],"frameDuration":41,"id":"AnimatedImageResource_C4272A85_CBD2_90CE_41E1_8E8136369FF9","frameCount":24}],"start":"this.init()","overflow":"hidden","scrollBarOpacity":0.5,"children":["this.MainViewer"],"scrollBarColor":"#000000","mobileMipmappingEnabled":false,"paddingLeft":0,"mediaActivationMode":"window","horizontalAlign":"left","propagateClick":false,"borderSize":0,"backgroundPreloadEnabled":true,"paddingRight":0,"downloadEnabled":false,"backgroundOpacity":1,"scripts":{"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getComponentByName":TDV.Tour.Script.getComponentByName,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"clone":TDV.Tour.Script.clone,"isPanorama":TDV.Tour.Script.isPanorama,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPixels":TDV.Tour.Script.getPixels,"setMapLocation":TDV.Tour.Script.setMapLocation,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setValue":TDV.Tour.Script.setValue,"init":TDV.Tour.Script.init,"setLocale":TDV.Tour.Script.setLocale,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"initQuiz":TDV.Tour.Script.initQuiz,"showWindow":TDV.Tour.Script.showWindow,"initAnalytics":TDV.Tour.Script.initAnalytics,"textToSpeech":TDV.Tour.Script.textToSpeech,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizFinish":TDV.Tour.Script.quizFinish,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizStart":TDV.Tour.Script.quizStart,"showPopupImage":TDV.Tour.Script.showPopupImage,"historyGoForward":TDV.Tour.Script.historyGoForward,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizShowScore":TDV.Tour.Script.quizShowScore,"shareSocial":TDV.Tour.Script.shareSocial,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"openLink":TDV.Tour.Script.openLink,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getOverlays":TDV.Tour.Script.getOverlays,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"unregisterKey":TDV.Tour.Script.unregisterKey,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getMediaByName":TDV.Tour.Script.getMediaByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"registerKey":TDV.Tour.Script.registerKey,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"existsKey":TDV.Tour.Script.existsKey,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"mixObject":TDV.Tour.Script.mixObject,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getKey":TDV.Tour.Script.getKey,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"cloneCamera":TDV.Tour.Script.cloneCamera,"translate":TDV.Tour.Script.translate,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"playAudioList":TDV.Tour.Script.playAudioList,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart},"scrollBarVisible":"rollOver","desktopMipmappingEnabled":false,"backgroundColor":["#FFFFFF"],"contentOpaque":false,"height":"100%","layout":"absolute","scrollBarMargin":2,"paddingTop":0,"defaultVRPointer":"laser","borderRadius":0,"minHeight":20,"backgroundColorRatios":[0],"minWidth":20,"backgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","data":{"name":"Player1241","defaultLocale":"en","textToSpeechConfig":{"rate":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"volume":1,"speechOnTooltip":false,"pitch":1,"stopBackgroundAudio":false},"locales":{"en":"locale/en.txt"}},"class":"Player","paddingBottom":0,"shadow":false};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.0.4.js.map
//Generated with v2021.0.4, Wed Jun 2 2021
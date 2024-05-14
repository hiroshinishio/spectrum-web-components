import './sb-preview/runtime.js';

const channel = __STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__.createChannel({ page: 'preview' });
__STORYBOOK_MODULE_PREVIEW_API__.addons.setChannel(channel);
window.__STORYBOOK_ADDONS_CHANNEL__ = channel;

const { SERVER_CHANNEL_URL } = globalThis;
if (SERVER_CHANNEL_URL) {
  const serverChannel = __STORYBOOK_MODULE_CHANNEL_WEBSOCKET__.createChannel({ url: SERVER_CHANNEL_URL });
  __STORYBOOK_MODULE_PREVIEW_API__.addons.setServerChannel(serverChannel);
  window.__STORYBOOK_SERVER_CHANNEL__ = serverChannel;
}

const importers = {
  './packages/accordion/stories/accordion-densities-compact.stories.js': () => import('./accordion-densities-compact.stories-B8Yhb10m.js'),
  './packages/accordion/stories/accordion-densities-spacious.stories.js': () => import('./accordion-densities-spacious.stories-CmAMh8tN.js'),
  './packages/accordion/stories/accordion-sizes.stories.js': () => import('./accordion-sizes.stories-Bcl0cI6W.js'),
  './packages/accordion/stories/accordion.stories.js': () => import('./accordion.stories-BxWBsZUJ.js'),
  './packages/action-bar/stories/action-bar.stories.js': () => import('./action-bar.stories-AcNZc-rk.js'),
  './packages/action-button/stories/action-button-black-quiet.stories.js': () => import('./action-button-black-quiet.stories-BAs9fv2q.js'),
  './packages/action-button/stories/action-button-black.stories.js': () => import('./action-button-black.stories-BxN81CH-.js'),
  './packages/action-button/stories/action-button-emphasized-quiet.stories.js': () => import('./action-button-emphasized-quiet.stories-sleqriLx.js'),
  './packages/action-button/stories/action-button-emphasized.stories.js': () => import('./action-button-emphasized.stories-DROJBhbi.js'),
  './packages/action-button/stories/action-button-quiet.stories.js': () => import('./action-button-quiet.stories-C0dTJ6aT.js'),
  './packages/action-button/stories/action-button-standard.stories.js': () => import('./action-button-standard.stories-V7XYpeQc.js'),
  './packages/action-button/stories/action-button-white-quiet.stories.js': () => import('./action-button-white-quiet.stories-jBcmZctL.js'),
  './packages/action-button/stories/action-button-white.stories.js': () => import('./action-button-white.stories-xWjLjeSV.js'),
  './packages/action-button/stories/action-button.stories.js': () => import('./action-button.stories-Bzsijlf9.js'),
  './packages/action-group/stories/action-group-sizes.stories.js': () => import('./action-group-sizes.stories-BkzH3N3h.js'),
  './packages/action-group/stories/action-group-tooltip.stories.js': () => import('./action-group-tooltip.stories-Co7zzd-4.js'),
  './packages/action-group/stories/action-group.stories.js': () => import('./action-group.stories-Cuf0iWgc.js'),
  './packages/action-menu/stories/action-menu-sizes.stories.js': () => import('./action-menu-sizes.stories-BDWzuGTQ.js'),
  './packages/action-menu/stories/action-menu.stories.js': () => import('./action-menu.stories-wrrjYlwa.js'),
  './packages/alert-dialog/stories/alert-dialog.stories.js': () => import('./alert-dialog.stories-02hXlfoK.js'),
  './packages/asset/stories/asset.stories.js': () => import('./asset.stories-BzQ7LoHP.js'),
  './packages/avatar/stories/avatar.stories.js': () => import('./avatar.stories-DTPStYmt.js'),
  './packages/badge/stories/badge.stories.js': () => import('./badge.stories-C8dy_MEo.js'),
  './packages/banner/stories/banner.stories.js': () => import('./banner.stories-BnwnVNwx.js'),
  './packages/button-group/stories/button-group-sizes.stories.js': () => import('./button-group-sizes.stories-BN4q2Isy.js'),
  './packages/button-group/stories/button-group.stories.js': () => import('./button-group.stories-Q9cVAgH3.js'),
  './packages/button/stories/button-accent-fill-pending.stories.js': () => import('./button-accent-fill-pending.stories-B8Wy39mN.js'),
  './packages/button/stories/button-accent-fill-sizes.stories.js': () => import('./button-accent-fill-sizes.stories-BLX_z4bv.js'),
  './packages/button/stories/button-accent-fill.stories.js': () => import('./button-accent-fill.stories-Ckm1GKUR.js'),
  './packages/button/stories/button-accent-outline-pending.stories.js': () => import('./button-accent-outline-pending.stories-CQ57bK6D.js'),
  './packages/button/stories/button-accent-outline-sizes.stories.js': () => import('./button-accent-outline-sizes.stories-B5FZ1Bp9.js'),
  './packages/button/stories/button-accent-outline.stories.js': () => import('./button-accent-outline.stories-BHG5kFaq.js'),
  './packages/button/stories/button-black-fill-pending.stories.js': () => import('./button-black-fill-pending.stories-c1TM8YwP.js'),
  './packages/button/stories/button-black-fill-sizes.stories.js': () => import('./button-black-fill-sizes.stories-fJpnUNCU.js'),
  './packages/button/stories/button-black-fill.stories.js': () => import('./button-black-fill.stories-BZX04h4S.js'),
  './packages/button/stories/button-black-outline-pending.stories.js': () => import('./button-black-outline-pending.stories-g7KZtw87.js'),
  './packages/button/stories/button-black-outline-sizes.stories.js': () => import('./button-black-outline-sizes.stories-DFSt6BA3.js'),
  './packages/button/stories/button-black-outline.stories.js': () => import('./button-black-outline.stories-qX67SxrO.js'),
  './packages/button/stories/button-negative-fill-pending.stories.js': () => import('./button-negative-fill-pending.stories-zkeTQ6uF.js'),
  './packages/button/stories/button-negative-fill-sizes.stories.js': () => import('./button-negative-fill-sizes.stories-ygCxCVJC.js'),
  './packages/button/stories/button-negative-fill.stories.js': () => import('./button-negative-fill.stories-BVzZ4y40.js'),
  './packages/button/stories/button-negative-outline-pending.stories.js': () => import('./button-negative-outline-pending.stories-IGez3m7N.js'),
  './packages/button/stories/button-negative-outline-sizes.stories.js': () => import('./button-negative-outline-sizes.stories-BplQ38ch.js'),
  './packages/button/stories/button-negative-outline.stories.js': () => import('./button-negative-outline.stories-DVS0Fy8M.js'),
  './packages/button/stories/button-primary-fill-pending.stories.js': () => import('./button-primary-fill-pending.stories-BCGIoL3O.js'),
  './packages/button/stories/button-primary-fill-sizes.stories.js': () => import('./button-primary-fill-sizes.stories-C9_YX4yq.js'),
  './packages/button/stories/button-primary-fill.stories.js': () => import('./button-primary-fill.stories-BFBLqIEu.js'),
  './packages/button/stories/button-primary-outline-pending.stories.js': () => import('./button-primary-outline-pending.stories-DAJUiLPu.js'),
  './packages/button/stories/button-primary-outline-sizes.stories.js': () => import('./button-primary-outline-sizes.stories-Dpn8RoDU.js'),
  './packages/button/stories/button-primary-outline.stories.js': () => import('./button-primary-outline.stories-Cb7k95Ev.js'),
  './packages/button/stories/button-secondary-fill-pending.stories.js': () => import('./button-secondary-fill-pending.stories-CqIybUUJ.js'),
  './packages/button/stories/button-secondary-fill-sizes.stories.js': () => import('./button-secondary-fill-sizes.stories-D3qoluOg.js'),
  './packages/button/stories/button-secondary-fill.stories.js': () => import('./button-secondary-fill.stories-_u4Ozo_L.js'),
  './packages/button/stories/button-secondary-outline-pending.stories.js': () => import('./button-secondary-outline-pending.stories-CoW1GigD.js'),
  './packages/button/stories/button-secondary-outline-sizes.stories.js': () => import('./button-secondary-outline-sizes.stories-ChxPyVdR.js'),
  './packages/button/stories/button-secondary-outline.stories.js': () => import('./button-secondary-outline.stories-BE8D3I5i.js'),
  './packages/button/stories/button-white-fill-pending.stories.js': () => import('./button-white-fill-pending.stories-NnsxFx9b.js'),
  './packages/button/stories/button-white-fill-sizes.stories.js': () => import('./button-white-fill-sizes.stories-BbZkHRYE.js'),
  './packages/button/stories/button-white-fill.stories.js': () => import('./button-white-fill.stories-CuOoNHJ5.js'),
  './packages/button/stories/button-white-outline-pending.stories.js': () => import('./button-white-outline-pending.stories-BLoSW0Bg.js'),
  './packages/button/stories/button-white-outline-sizes.stories.js': () => import('./button-white-outline-sizes.stories-16BWyikn.js'),
  './packages/button/stories/button-white-outline.stories.js': () => import('./button-white-outline.stories-DVnKBVA_.js'),
  './packages/card/stories/card.stories.js': () => import('./card.stories-Hnst-OYL.js'),
  './packages/checkbox/stories/checkbox-sizes.stories.js': () => import('./checkbox-sizes.stories-Dn2KoZ4C.js'),
  './packages/checkbox/stories/checkbox.stories.js': () => import('./checkbox.stories-DsDBerm2.js'),
  './packages/coachmark/stories/coach-indicator-static.stories.js': () => import('./coach-indicator-static.stories-DqXG-NUB.js'),
  './packages/coachmark/stories/coach-indicator.stories.js': () => import('./coach-indicator.stories-B1YD9U1p.js'),
  './packages/coachmark/stories/coachmark.stories.js': () => import('./coachmark.stories-Cm6P-yLc.js'),
  './packages/color-area/stories/color-area.stories.js': () => import('./color-area.stories-Dgfubfps.js'),
  './packages/color-field/stories/color-field-sizes.stories.js': () => import('./color-field-sizes.stories-DXGbraCk.js'),
  './packages/color-field/stories/color-field.stories.js': () => import('./color-field.stories-DeNrfNn8.js'),
  './packages/color-handle/stories/color-handle.stories.js': () => import('./color-handle.stories-KkcNg5oP.js'),
  './packages/color-loupe/stories/color-loupe.stories.js': () => import('./color-loupe.stories-BnwUmPlC.js'),
  './packages/color-slider/stories/color-slider.stories.js': () => import('./color-slider.stories-D6ydUuIz.js'),
  './packages/color-wheel/stories/color-wheel.stories.js': () => import('./color-wheel.stories-CAwUixl1.js'),
  './packages/combobox/stories/combobox-sizes.stories.js': () => import('./combobox-sizes.stories-bFe4XlWC.js'),
  './packages/combobox/stories/combobox.stories.js': () => import('./combobox.stories-BL8jyrrC.js'),
  './packages/dialog/stories/dialog-base.stories.js': () => import('./dialog-base.stories-BGriYrue.js'),
  './packages/dialog/stories/dialog-wrapper.stories.js': () => import('./dialog-wrapper.stories-B0YjI8WE.js'),
  './packages/dialog/stories/dialog.stories.js': () => import('./dialog.stories-_zEoogo5.js'),
  './packages/divider/stories/divider.stories.js': () => import('./divider.stories-sd_sdv1u.js'),
  './packages/dropzone/stories/dropzone.stories.js': () => import('./dropzone.stories-ycH1EM3f.js'),
  './packages/field-group/stories/field-group.stories.js': () => import('./field-group.stories-CYHwoWGf.js'),
  './packages/field-label/stories/field-label.stories.js': () => import('./field-label.stories-BLKKYTRm.js'),
  './packages/help-text/stories/help-text-sizes.stories.js': () => import('./help-text-sizes.stories-CyKfQavB.js'),
  './packages/help-text/stories/help-text.stories.js': () => import('./help-text.stories--jlmqcNj.js'),
  './packages/icon/stories/icon.stories.js': () => import('./icon.stories-Ce_taguv.js'),
  './packages/icons-ui/stories/icons-ui.stories.js': () => import('./icons-ui.stories-CdlAjrDB.js'),
  './packages/icons-workflow/stories/icons-workflow.stories.js': () => import('./icons-workflow.stories-o2-PkHcY.js'),
  './packages/icons/stories/icons.stories.js': () => import('./icons.stories-C49CLKQ5.js'),
  './packages/illustrated-message/stories/illustrated-message.stories.js': () => import('./illustrated-message.stories-Dm_iOH-o.js'),
  './packages/infield-button/stories/infield-button-sizes.stories.js': () => import('./infield-button-sizes.stories-u1Ft0ezR.js'),
  './packages/infield-button/stories/infield-button.stories.js': () => import('./infield-button.stories-D1TQtlXq.js'),
  './packages/link/stories/link.stories.js': () => import('./link.stories-Cz2VP2qj.js'),
  './packages/menu/stories/menu-divider.stories.js': () => import('./menu-divider.stories-Cy7NVgAc.js'),
  './packages/menu/stories/menu-group.stories.js': () => import('./menu-group.stories-VbEfXniS.js'),
  './packages/menu/stories/menu-item.disconnected.stories.js': () => import('./menu-item.disconnected.stories-CPX1HDnv.js'),
  './packages/menu/stories/menu-item.stories.js': () => import('./menu-item.stories-Kb8AptlA.js'),
  './packages/menu/stories/menu-sizes.stories.js': () => import('./menu-sizes.stories-CY06FIQt.js'),
  './packages/menu/stories/menu.stories.js': () => import('./menu.stories-T5hzDVWY.js'),
  './packages/menu/stories/submenu.stories.js': () => import('./submenu.stories-lfG3oJd2.js'),
  './packages/meter/stories/meter-sizes.stories.js': () => import('./meter-sizes.stories-DquqAZZ8.js'),
  './packages/meter/stories/meter.stories.js': () => import('./meter.stories-A583iq2x.js'),
  './packages/number-field/stories/number-field-sizes.stories.js': () => import('./number-field-sizes.stories-BW80Ml56.js'),
  './packages/number-field/stories/number-field.stories.js': () => import('./number-field.stories-SGNs7uRD.js'),
  './packages/overlay/stories/overlay-directive.stories.js': () => import('./overlay-directive.stories-3ftA_v7w.js'),
  './packages/overlay/stories/overlay-element.stories.js': () => import('./overlay-element.stories-Bz0o2Ad6.js'),
  './packages/overlay/stories/overlay.stories.js': () => import('./overlay.stories-DNl3oJTg.js'),
  './packages/picker-button/stories/picker-button-sizes.stories.js': () => import('./picker-button-sizes.stories-xxHF9yGF.js'),
  './packages/picker-button/stories/picker-button.stories.js': () => import('./picker-button.stories-fv6To4u7.js'),
  './packages/picker/stories/picker-pending.stories.js': () => import('./picker-pending.stories-B2395r02.js'),
  './packages/picker/stories/picker-sizes.stories.js': () => import('./picker-sizes.stories-gKsLPgMG.js'),
  './packages/picker/stories/picker.stories.js': () => import('./picker.stories-DnT3uQy4.js'),
  './packages/popover/stories/popover.stories.js': () => import('./popover.stories-lgxjGC0w.js'),
  './packages/progress-bar/stories/progress-bar-sizes.stories.js': () => import('./progress-bar-sizes.stories-C5e4PeTe.js'),
  './packages/progress-bar/stories/progress-bar.stories.js': () => import('./progress-bar.stories-DoesqA2H.js'),
  './packages/progress-circle/stories/progress-circle.stories.js': () => import('./progress-circle.stories-DvMfRsSo.js'),
  './packages/quick-actions/stories/quick-actions.stories.js': () => import('./quick-actions.stories-VwWPVjgh.js'),
  './packages/radio/stories/radio-sizes.stories.js': () => import('./radio-sizes.stories-CwW4NA9Q.js'),
  './packages/radio/stories/radio.stories.js': () => import('./radio.stories-DZJHw5qu.js'),
  './packages/search/stories/search-sizes.stories.js': () => import('./search-sizes.stories-Bcp4oqyC.js'),
  './packages/search/stories/search.stories.js': () => import('./search.stories-DQOVQPOt.js'),
  './packages/sidenav/stories/sidenav.stories.js': () => import('./sidenav.stories-BQtk3Ydt.js'),
  './packages/slider/stories/slider-sizes.stories.js': () => import('./slider-sizes.stories-eX1d-vGZ.js'),
  './packages/slider/stories/slider.stories.js': () => import('./slider.stories-DqFPLVFi.js'),
  './packages/split-button/stories/split-button-accent-field.stories.js': () => import('./split-button-accent-field.stories-DO5rPrJH.js'),
  './packages/split-button/stories/split-button-accent-more.stories.js': () => import('./split-button-accent-more.stories-B-vYOX-p.js'),
  './packages/split-button/stories/split-button-primary-field.stories.js': () => import('./split-button-primary-field.stories-DIjqMqPt.js'),
  './packages/split-button/stories/split-button-primary-more.stories.js': () => import('./split-button-primary-more.stories-CgJlj3yG.js'),
  './packages/split-button/stories/split-button-secondary-field.stories.js': () => import('./split-button-secondary-field.stories-BTxUddF-.js'),
  './packages/split-button/stories/split-button-secondary-more.stories.js': () => import('./split-button-secondary-more.stories-LEP1k5ZQ.js'),
  './packages/split-view/stories/split-view.stories.js': () => import('./split-view.stories-DLmIOhTl.js'),
  './packages/status-light/stories/status-light.stories.js': () => import('./status-light.stories-B_6pdHHa.js'),
  './packages/swatch/stories/swatch-group.stories.js': () => import('./swatch-group.stories-DUst2OOM.js'),
  './packages/swatch/stories/swatch-sizes.stories.js': () => import('./swatch-sizes.stories-Bc7UfYud.js'),
  './packages/swatch/stories/swatch.stories.js': () => import('./swatch.stories-CZwaj0t2.js'),
  './packages/switch/stories/switch-sizes.stories.js': () => import('./switch-sizes.stories-D_4a9kQB.js'),
  './packages/switch/stories/switch.stories.js': () => import('./switch.stories-BzQ4O7jr.js'),
  './packages/table/stories/table-elements.stories.js': () => import('./table-elements.stories-Dvi8xZeJ.js'),
  './packages/table/stories/table-virtualized.stories.js': () => import('./table-virtualized.stories-OeFyFkbf.js'),
  './packages/tabs/stories/tabs-horizontal-sizes.stories.js': () => import('./tabs-horizontal-sizes.stories-Bq4aKxeA.js'),
  './packages/tabs/stories/tabs-overflow-panel-sizes.stories.js': () => import('./tabs-overflow-panel-sizes.stories-BOedwBVw.js'),
  './packages/tabs/stories/tabs-overflow-sizes.stories.js': () => import('./tabs-overflow-sizes.stories-CdyDMk1u.js'),
  './packages/tabs/stories/tabs-overflow.stories.js': () => import('./tabs-overflow.stories-Cx93yPLa.js'),
  './packages/tabs/stories/tabs-vertical-right-sizes.stories.js': () => import('./tabs-vertical-right-sizes.stories-Dc4Y2t87.js'),
  './packages/tabs/stories/tabs-vertical-sizes.stories.js': () => import('./tabs-vertical-sizes.stories-C80yWOga.js'),
  './packages/tabs/stories/tabs.stories.js': () => import('./tabs.stories-BavH90LH.js'),
  './packages/tags/stories/tags-sizes.stories.js': () => import('./tags-sizes.stories-D5zZ-lpy.js'),
  './packages/tags/stories/tags.stories.js': () => import('./tags.stories-D5zXtoFs.js'),
  './packages/textfield/stories/textarea-sizes.stories.js': () => import('./textarea-sizes.stories-DuARBBs4.js'),
  './packages/textfield/stories/textarea.stories.js': () => import('./textarea.stories-Djd1W-7q.js'),
  './packages/textfield/stories/textfield-sizes.stories.js': () => import('./textfield-sizes.stories-CX2Q2Rn2.js'),
  './packages/textfield/stories/textfield.stories.js': () => import('./textfield.stories-0r_WDzgg.js'),
  './packages/thumbnail/stories/thumbnail-sizes.stories.js': () => import('./thumbnail-sizes.stories-CW7weR2m.js'),
  './packages/thumbnail/stories/thumbnail.stories.js': () => import('./thumbnail.stories-CIAeVBhV.js'),
  './packages/toast/stories/toast.stories.js': () => import('./toast.stories-DAK1aqMJ.js'),
  './packages/tooltip/stories/tooltip-directive.stories.js': () => import('./tooltip-directive.stories-C9oFey32.js'),
  './packages/tooltip/stories/tooltip.stories.js': () => import('./tooltip.stories-CcW69VyX.js'),
  './packages/top-nav/stories/top-nav-sizes.stories.js': () => import('./top-nav-sizes.stories-BCuNGmjH.js'),
  './packages/top-nav/stories/top-nav.stories.js': () => import('./top-nav.stories-Cpi7bah1.js'),
  './packages/tray/stories/tray.stories.js': () => import('./tray.stories-ssDBoyXp.js'),
  './packages/underlay/stories/underlay.stories.js': () => import('./underlay.stories-BZ2A7c-4.js'),
  './tools/grid/stories/grid.stories.js': () => import('./grid.stories-BM3rX3T7.js'),
  './tools/styles/stories/styles.stories.js': () => import('./styles.stories-BR8no7dI.js'),
  './tools/theme/stories/theme.stories.js': () => import('./theme.stories-BT04wp6U.js'),
  './tools/truncated/stories/truncated.stories.js': () => import('./truncated.stories-BBVfHV8S.js')
};

function importFn(path) {
  return importers[path]();
}

const getProjectAnnotations = async () => {
  const configs = await Promise.all([
    import('./entry-preview-Dz5gyfks.js'),
    import('./entry-preview-docs-BQjwfurd.js'),
    import('./preview-Clq6PsYy.js'),
    import('./preview-Dy5BLt_c.js'),
    import('./preview-BcJVSA4a.js'),
    import('./preview-Bf0d1tVO.js'),
    import('./preview-CU2JNqMw.js'),
    import('./preview-BT9ta7nr.js'),
    import('./preview-CDagOaLU.js'),
    import('./preview-CtQuewXd.js'),
    import('./preview-BurMJxab.js')
  ]);
  return __STORYBOOK_MODULE_PREVIEW_API__.composeConfigs(configs);
};

window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new __STORYBOOK_MODULE_PREVIEW_API__.PreviewWeb();

window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ = window.__STORYBOOK_CLIENT_API__ || new __STORYBOOK_MODULE_PREVIEW_API__.ClientApi({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({ importFn, getProjectAnnotations });
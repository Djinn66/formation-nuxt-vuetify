import enrolementIcon from 'assets/icons/enrolement.svg'
import exportIcon from 'assets/icons/export.svg'
import siteIcon from 'assets/icons/site.svg'
import cameraIcon from 'assets/icons/camera.svg'

export const appNavigationDrawerMenuLinks = {
    gestionEnrolement: {to: '/gestion/enrolement', title: 'Gestion enrôlement', icon: enrolementIcon},
    exporter: {to: '/export', title: 'Export', icon: exportIcon},
    gestionSite: {to: '/gestion/site', title: 'Gestion sites', icon: siteIcon},
    gestionCamera: {to: '/gestion/camera', title: 'Gestion caméra', icon: cameraIcon},
}

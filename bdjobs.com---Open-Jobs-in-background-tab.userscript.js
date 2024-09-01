// ==UserScript==
// @name        bdjobs.com - Open Jobs in background tab
// @namespace   Violentmonkey Scripts
// @match       https://jobs.bdjobs.com/*
// @grant       GM_openInTab
// @version     1.1
// @author      webdevsk
// @run-at      document-end
// @description Opens Job pages in a background tab
// ==/UserScript==
unsafeWindow.DivOpen = QStr => {windowOpen == 0 && GM_openInTab("jobdetails.asp?" + QStr, {active: false}); windowOpen = 0}
unsafeWindow.DivOpenBN = QStr => {windowOpen == 0 && GM_openInTab("jobdetailsBN.asp?" + QStr, {active: false}); windowOpen = 0}


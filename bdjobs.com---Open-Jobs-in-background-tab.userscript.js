// ==UserScript==
// @name        bdjobs.com - Open Jobs in background tab
// @namespace   Violentmonkey Scripts
// @match       https://jobs.bdjobs.com/*
// @grant       GM_openInTab
// @version     1.0
// @author      webdevsk
// @run-at      document-end
// @description Opens Job pages in a background tab
// ==/UserScript==
unsafeWindow.DivOpen = QStr => GM_openInTab("jobdetails.asp?" + QStr, { active: false })
unsafeWindow.DivOpenBN = QStr => GM_openInTab("jobdetailsBN.asp?" + QStr, { active: false })
/* Bespoke CMS cookie management disabled
CookieControl = read_cookie('CookieControl');
*/

// Function to show the bottom-bar loading indicator
function showLoadingBar() {
    const loadingBar = document.querySelector('#loading-bar');
    loadingBar.setAttribute('aria-busy', 'true');
    loadingBar.setAttribute('aria-label', 'Loading content');    
    loadingBar.style.display = 'block';
    loadingBar.classList.add('animate');
}

// Function to hide the bottom-bar loading indicator
function hideLoadingBar() {
    const loadingBar = document.querySelector('#loading-bar');
    loadingBar.classList.remove('animate');
    loadingBar.removeAttribute('aria-busy');
    loadingBar.removeAttribute('aria-label');    
    setTimeout(() => {
        loadingBar.style.display = 'none';
    }, 500); // Match CSS transition duration
}

// Function to disable form submissions (skip focused element)
function disableForms() {
    const activeElement = document.activeElement; // Get the currently focused element
    document.querySelectorAll('form').forEach(form => {
        form.querySelectorAll('input, select, textarea, button').forEach(element => {
            // Disable only if the element is not the currently focused one
            if (element !== activeElement) {
                element.disabled = true;
            }
        });
    });
}

// Function to enable form submissions
function enableForms() {
    document.querySelectorAll('form').forEach(form => {
        form.querySelectorAll('input, select, textarea, button').forEach(element => {
            element.disabled = false;
        });
    });
}

// Call disable forms when submit button is pressed to prevent accidental double-submissions
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        disableForms();
    });
});

// jQuery AJAX event handlers
$(document).ajaxStart(function () {
    showLoadingBar();
    disableForms();
});

$(document).ajaxStop(function () {
    hideLoadingBar();
    enableForms();
});

// Clean up on pagehide
window.addEventListener('pagehide', function () {
    hideLoadingBar();
    enableForms();
});

function getUrlVars() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    //console.log(urlParams);
    return urlParams;
}

function highlightField(id) {
    document.getElementById(id).focus();
    document.getElementById(id).select();
}

function tempAlert({msg='', duration=500}={}) {
    var el = document.createElement("div");
    el.setAttribute("id","TempAlert");
    el.innerHTML = msg;
    setTimeout(function(){
      el.setAttribute("class","transparent");
    },duration);
    setTimeout(function(){
      el.parentNode.removeChild(el);
    },duration*2);
    document.body.appendChild(el);
}

function BootstrapAlert(msg_body, msg_type, duration=2000) {
    // Uses Bootstrap
    // msg_type : warning, info, danger, or success
    var wrapper = document.createElement("div");
    wrapper.setAttribute('class', 'alertwrapper');
    myAlert = '';
    myAlert += '<div class="alert alert-dismissible fade show alert-' + msg_type + '" role="alert">';
    myAlert += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
    myAlert += msg_body;
    myAlert += '</div>';
    wrapper.innerHTML = myAlert;
    document.body.appendChild(wrapper);
    setTimeout(function() {
        $(".alert").alert('close');
        $(".alertwrapper").remove();
    }, duration);
}

function DownloadHandler(language,formid,reference,url) {
    structLocalStorage = JSON.parse(localStorage.getItem('form_' + formid)) || {}; // Defaults to empty if undefined.

    if ( (Object.keys(structLocalStorage).length === 1)
        && (structLocalStorage.url)
    ) {
        // Download link clicked, but form not completed last time clicked, so only contains url. Just remove it so form can display
        localStorage.removeItem('form_' + formid);
        structLocalStorage = JSON.parse(localStorage.getItem('form_' + formid)) || {}; // Defaults to empty if undefined.
    }

    if (Object.keys(structLocalStorage).length !== 0) {
        if (structLocalStorage.emailconfirmeddate) {
            window.open('/' + language + '/downloads/?form-id=' + formid + '&submission-id=' + structLocalStorage.submission_id + '&reference=' + reference + '&url=' + url, "downloadwindow");
        }
        else {
            BootstrapAlert(getLocalText('Please refer to the email you have been sent to confirm your email address.') + '<br /><a class="ClearFormLocalStorageKey" data-formid="' + formid + '">' + getLocalText('I have received no email. Reset and try again.') + '</a>', 'warning', 15000);
        }
    }
    else {
        $('#myDownloadPopup_' + formid).modal('show');
    }

    structLocalStorage.url = url;
    localStorage.setItem('form_' + formid, JSON.stringify(structLocalStorage));

}

function GatedContentHandler(formid) {
    structLocalStorage = JSON.parse(localStorage.getItem('form_' + formid)) || {}; // Defaults to empty if undefined.

    if (Object.keys(structLocalStorage).length !== 0) {
        if (structLocalStorage.emailconfirmeddate) {
            // Form completed and email confirmed. Show content.
            $(document).ready(function() {
                $('[data-gatedcontent][data-formid=' + formid + ']').each(function() {
                    var myItem = $(this);
                    $.ajax({
                        url: '/common/class.gated.php?method=ParseGatedContent'
                        ,type: 'POST'
                        ,data: {
                            'myString': myItem.html()
                            ,'submission_id': structLocalStorage.submission_id
                            ,'form_id': formid
                            ,'reference': myItem.data('reference')
                        }
                        ,success: function(response) {
                            myItem.html(response);
                            myItem.removeClass('hidden');
                            //localStorage.setItem('form_' + formid, JSON.stringify(structLocalStorage));
                        }
                        ,error: function(ErrorMsg) {
                            console.log(ErrorMsg);
                        }
                    });    
                });                        

                // Remove fallback gated comment from DOM
                $('[data-gatedcontentfallback][data-formid=' + formid + ']').each(function() {
                    var myItem = $(this);
                    //myItem.addClass('hidden');
                    myItem.remove()
                });                        

                // Remove gated form from DOM
                $('#gatedform_' + formid).remove();

            });
        }
        else {
            $(document).ready(function() {
                var myItem = $('[data-gatedcontent][data-formid=' + formid + ']').first();
                myItem.html(getLocalText('Please refer to the email you have been sent to confirm your email address.') + '<br /><a class="ClearFormLocalStorageKey" data-formid="' + formid + '" role="button">' + getLocalText('I have received no email. Reset and try again.'));
                myItem.removeClass('hidden');
            });
        }
    }
    else {
        // Form not completed. Show form.
        $(document).ready(function() {
            var myItem = $('#gatedform_' + formid);
            $.ajax({
                url: '/common/class.gated.php?method=ParseGatedForm'
                ,type: 'POST'
                ,data: {
                    'myString': myItem.html()
                }
                ,success: function(response) {
                    myItem.html(response);
                    myItem.removeClass('hidden');
                }
                ,error: function(ErrorMsg) {
                    console.log(ErrorMsg);
                }
            });    
        });
    }

}

function StoreFormSubmissionDetails(formid,completed,submission_id) {
    structLocalStorage = JSON.parse(localStorage.getItem('form_' + formid)) || {}; // Defaults to empty if undefined.
    //console.log('structLocalStorage - Pre Amendment');
    //console.log(structLocalStorage);
    structLocalStorage['completed'] = completed;
    structLocalStorage['submission_id'] = submission_id;
    structLocalStorage['referrer_url'] = window.location.href;
    //console.log('structLocalStorage - Post Amendment');
    //console.log(structLocalStorage);
    localStorage.setItem('form_' + formid, JSON.stringify(structLocalStorage));
}

function ClearFormLocalStorageKey(formid) {
    console.log('Clearing ' + formid);
    localStorage.removeItem('form_' + formid);
}

function getCookies() {
    const cookies = document.cookie.split(';');
    const cookieObject = {};
  
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim().split('=');
      const name = decodeURIComponent(cookie[0]);
      const value = decodeURIComponent(cookie[1]);
      cookieObject[name] = value;
    }
  
    return cookieObject;
}
function bake_cookie(name, value, permanent=false) {
    // Creates a cookie with a JSON structure
    //var cookie = [name, '=', JSON.stringify(value), '; domain=.', window.location.host.toString(), '; path=/; samesite=strict'].join('');
    var settings = '; domain=.' + window.location.host.toString() + '; path=/; samesite=strict';
    if (permanent == true) {
        var expiration_date = new Date();
        expiration_date.setFullYear(expiration_date.getFullYear() + 1);
        settings = settings + '; expires=' + expiration_date.toUTCString();
    }
    cookie = [name, '=', JSON.stringify(value), settings].join('');
    document.cookie = cookie;
}
function read_cookie(name) {
    // Reads a cookie with a JSON structure
    var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
    result && (result = JSON.parse(result[1]));
    return result;
}
function getCookieValue(name) {
    // Reads a cookie with semicolon separated data pairs
    return document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '';
}
function delete_cookie(cookieName) {
    //document.cookie = [cookieName, '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain=.', window.location.host.toString()].join('');
    document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}
function get_cookie_2(name){
    return document.cookie.split(';').some(c => {
        return c.trim().startsWith(name + '=');
    });
}
function decodeValuePairsToObject(myString, separator, pairSeparator = '=') {
    const myObject = {};
  
    myString.split(separator).forEach(pair => {
      const [key, value] = pair.trim().split(pairSeparator);
      myObject[decodeURIComponent(key)] = decodeURIComponent(value);
    });
  
    return myObject;
}
function performanceCookiesAllowed() {
    bPerformanceCookiesAllowed = false;
    //console.log('OptanonConsent cookie: ', getCookieValue('OptanonConsent'));
    objOneTrustCookie = decodeValuePairsToObject(getCookieValue('OptanonConsent'), '&', '=');
    //console.log('Parsed OneTrust cookie: ', objOneTrustCookie);
    //console.log(objOneTrustCookie.groups);
    if (objOneTrustCookie.groups) {
        objGroups = decodeValuePairsToObject(objOneTrustCookie.groups, ',', ':');
        //console.log('Parsed groups value: ', objGroups);
        //console.log('objGroups[\'2\']: ', objGroups['2']);
        if ( (objGroups['2']) && (objGroups['2'] == 1) ) {
            //console.log('Performance cookies allowed');
            bPerformanceCookiesAllowed = true;
        }
    }

    return bPerformanceCookiesAllowed;
}

function CreateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid.toUpperCase();
};

/*
function Confirm(message,callbackFunctionTrue,callbackFunctionFalse,callbackParams) {
    $('<div></div>').html(message).dialog({
        resizable: false,
        modal: true,
        height: 'auto',
        width: 'auto',
        buttons: {
            'Confirm': function() {
                $(this).dialog("close");
                callbackFunctionTrue(callbackParams);
            },
            'Cancel': function() {
                $(this).dialog("close");
                if (callbackFunctionFalse) {
                    callbackFunctionFalse(callbackParams);
                }
            }
        }
    });
}
*/

function Confirm(message, callbackFunctionTrue, callbackFunctionFalse, callbackParams) {
    $('<div></div>').html(message).dialog({
        resizable: false,
        modal: true,
        height: 'auto',
        width: 'auto',
        buttons: {
            'Confirm': function() {
                $(this).dialog("close");
                let callbackTrue = callbackFunctionTrue;
                if (typeof callbackTrue === 'string') {
                    callbackTrue = callbackTrue.split('.').reduce((obj, key) => obj && obj[key], window);
                }
                if (typeof callbackTrue === 'function') {
                    callbackTrue(callbackParams);
                }
            },
            'Cancel': function() {
                $(this).dialog("close");
                let callbackFalse = callbackFunctionFalse;
                if (typeof callbackFalse === 'string') {
                    callbackFalse = callbackFalse.split('.').reduce((obj, key) => obj && obj[key], window);
                }
                if (typeof callbackFalse === 'function') {
                    callbackFalse(callbackParams);
                }
            }
        }
    });
}

function textareaLengthLimit(textarea, maxlength) {
    var length = document.getElementById(textarea).value.length;
    if (length>maxlength) {
        document.getElementById(textarea).value = document.getElementById(textarea).value.substring(0, maxlength);
        length = document.getElementById(textarea + '_counter').value.length;
    }
    var charactersLeft = maxlength - length;
    document.getElementById(textarea + '_counter').innerHTML = charactersLeft;
}

function unserialize(serializedData) {
    // From https://stackoverflow.com/questions/3100297/jquery-serialize-and-unserialize
    let urlParams = new URLSearchParams(serializedData); // get interface / iterator
    let unserializedData = {}; // prepare result object
    for (let [key, value] of urlParams) { // get pair > extract it to key/value
        if (typeof unserializedData[key] === 'undefined') {
            unserializedData[key] = value;
        }
        else {
            unserializedData[key] += ',' + value;
        }
    }

    return unserializedData;
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function scrollToElement(selector, speed = 100) {
    const element = document.querySelector(selector);
    const targetTop = element.offsetTop;
    const startTop = window.pageYOffset || document.documentElement.scrollTop;
    const distance = targetTop - startTop;

    if (speed <= 0) {
        window.scrollTo(0, targetTop);
        return;
    }

    const startTime = performance.now();
    const duration = speed;

    function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = progress * (2 - progress);

        window.scrollTo(0, startTop + distance * ease);

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }

    requestAnimationFrame(animateScroll);
}

//Event delegation: $(document).ready(function() does not work when detecting events on dynamically created elements. See https://stackoverflow.com/questions/203198/event-binding-on-dynamically-created-elements
$(document).on('click', 'a.ClearFormLocalStorageKey', function() {
    $(".alert").alert('close');
    $(".alertwrapper").remove();
    console.log('Clear storage key for', $(this).data('formid'));
    ClearFormLocalStorageKey($(this).data('formid'));
    location.reload();
});

function toggleCheckboxesByClass(controlElement, targetClass) {
    console.log(controlElement.checked);
    $(`.${targetClass}`).each(function() { 
        this.checked = controlElement.checked;
    });
}

function checkCheckboxesByClass(targetClass) {
    $(`.${targetClass}`).each(function() { 
        this.checked = true;
    });
}

function uncheckCheckboxesByClass(targetClass) {
    $(`.${targetClass}`).each(function() { 
        this.checked = false;
    });
}

function encrypt(myString, callback=null) {
    $.ajax({
        url: '/common/class.encryption.php?method=Encrypt'
        ,type: 'POST'
        ,data: {
            'myString': myString
        }
        ,success: function(response) {
            if (callback!=null) {
                //See https://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string
                window[callback](response);
            }
            else {
                return response;
            }
        }
        ,error: function(ErrorMsg){
            console.log(ErrorMsg);
        }
    });    
}

function decrypt(myString, callback=null) {
    $.ajax({
        url: '/common/class.encryption.php?method=Decrypt'
        ,type: 'POST'
        ,data: {
            'myString': myString
        }
        ,success: function(response) {
            if (callback!=null) {
                //See https://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string
                window[callback](response);
            }
            else {
                return response;
            }
        }
        ,error: function(ErrorMsg){
            console.log(ErrorMsg);
        }
    });    
}

function getLocalText(myString) {
    if ( (typeof cmslocal !== 'undefined') && (cmslocal[myString]) ) { // If localised strings exist, they are defined in /scripts/i18n/siteid/xx.js file
        myString = cmslocal[myString];
    }
    return myString;
}

function rand(min,max) {
    /* Generate a random integer between min and max */
    return Math.floor(Math.random() * (max-min)) + min;
}

function processNotifications() {
    structLocalStorage = JSON.parse(localStorage.getItem('notifications')) || {}; // Defaults to empty if undefined.
    if ( (Object.keys(structLocalStorage).length !== 0) ) {
    }
}

function closeNotificationBar(event) {
    event.preventDefault();
    parentNotificationBar = this.closest(".notification-bar");
    notificationBarID = parentNotificationBar.id;
    parentNotificationBar.remove();
    try {
        arrayLocalStorage = JSON.parse(localStorage.getItem('notifications')) || []; // Defaults to empty if undefined.
    }
    catch(err) {
        arrayLocalStorage = [];
    }
    if (!arrayLocalStorage.includes(notificationBarID)) {
        arrayLocalStorage.push(notificationBarID);
        localStorage.setItem('notifications', JSON.stringify(arrayLocalStorage));
    }
}

function copyToClipboard(copiedText, alertText) {
    if (window.isSecureContext) {
        navigator.clipboard.writeText(copiedText); 
        BootstrapAlert(alertText, 'dark', duration=2000);
    }
    else {
        BootstrapAlert(getLocalText('Copy to clipboard not available, because domain is not secure.'), 'info', duration=1000);
    }
}

function GetLocalStorageValues(key) {
    structLocalStorage = JSON.parse(localStorage.getItem(key)) || {}; // Defaults to empty if undefined.
    //console.log('structLocalStorage for ' + key, structLocalStorage);
    return structLocalStorage;
}

/* Header and footer related scripts */
function toggleStyle(el, prop, style1, style2) {
    el.style[prop] = el.style[prop] === style1 ? style2 : style1;
}

function handleMenuItemClick(e) {
  // Parent toggles are buttons (or anchors without href) – don't navigate
  e.preventDefault();
  e.stopPropagation();

  const parentLi = this.closest('nav#main-menu li.parent');
  if (!parentLi) return;

  // SAFER: pick the submenu without relying on :scope
  // (first direct child UL.child in this structure)
  const submenu = parentLi.querySelector('ul.child');
  if (!submenu) return;

  const isOpen = window.getComputedStyle(submenu).display !== 'none';
  submenu.style.display = isOpen ? 'none' : 'block';

  // Reflect state for a11y (button or legacy non-navigating anchor)
  const toggle = parentLi.querySelector('button, a:not([href])');
  if (toggle) toggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
}

function showBottomMenuBar() {
    document.querySelector('#small-screen-menu-nav').classList.add("hidden");
    document.querySelector('#main-menu').classList.remove("hidden");
}
function hideBottomMenuBar() {
    document.querySelector('#small-screen-menu-nav').classList.remove("hidden");
    document.querySelector('#main-menu').classList.add("hidden");
}

function toggleBurgerMenu() {
    document.querySelector('#main-menu').classList.toggle("hidden");
}

function activateHamburgerMenu() {
  hideBottomMenuBar();

  // Close overlay when any *real* link is clicked
  const menuItems = document.querySelectorAll('nav#main-menu a[href]');
  menuItems.forEach(menuItem => menuItem.addEventListener('click', toggleBurgerMenu));

  // Reset child menus
  const childMenus = document.querySelectorAll('nav#main-menu li.parent > ul.child');
  childMenus.forEach(childMenu => childMenu.style.setProperty('display', 'none'));
}

function activateNormalMenu() {
  showBottomMenuBar();

  // Remove inline display so desktop CSS controls hover behavior
  const childMenus = document.querySelectorAll('nav#main-menu li.parent > ul.child');
  childMenus.forEach(childMenu => childMenu.style.removeProperty('display'));
}

function setMenuBehaviours() {
    const hamburgerMenuBreakPoint = 992;
    if (window.innerWidth <= hamburgerMenuBreakPoint) {
        activateHamburgerMenu();
    }
    else {
        activateNormalMenu();
    }
}

/* Popover content */
document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('[data-popover]');
  let activePopover = null;
  let activeTrigger = null;

  triggers.forEach(trigger => {
    const popoverSelector = `#${trigger.getAttribute('data-popover')}`;
    const popover = document.querySelector(popoverSelector);

    // Click to toggle
    trigger.addEventListener('click', (e) => {
      e.preventDefault();

      if (activePopover && activePopover !== popover) {
        closePopover(activePopover, activeTrigger);
      }

      if (popover.classList.contains('show')) {
        closePopover(popover, trigger);
      } else {
        openPopover(popover, trigger);
      }
    });

    // Keyboard: Enter or Space to toggle
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger.click();
      }
    });
  });

  // ESC key closes active popover
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activePopover) {
      closePopover(activePopover, activeTrigger);
    }
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (activePopover && !activePopover.contains(e.target) && !activeTrigger.contains(e.target)) {
      closePopover(activePopover, activeTrigger);
    }
  });

  function openPopover(popover, trigger) {
    positionPopover(trigger, popover);
    popover.classList.add('show');
    popover.setAttribute('aria-hidden', 'false');
    trigger.setAttribute('aria-expanded', 'true');
    activePopover = popover;
    activeTrigger = trigger;

    trapFocus(popover);
  }

  function closePopover(popover, trigger) {
    popover.classList.remove('show');
    popover.setAttribute('aria-hidden', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    activePopover = null;
    activeTrigger = null;

    trigger.focus();
  }


  function positionPopover(trigger, popover) {
    const rect = trigger.getBoundingClientRect();
    const popoverWidth = popover.offsetWidth;
    const popoverHeight = popover.offsetHeight;
    const padding = 6;

    // Default position: below the trigger
    let left = rect.left + (rect.width / 2) - (popoverWidth / 2);
    let top = rect.bottom + padding;

    // Adjust horizontally if popover would overflow right edge
    if (left + popoverWidth > window.innerWidth) {
        left = window.innerWidth - popoverWidth - padding;
    }
    if (left < padding) {
        left = padding;
    }

    // Adjust vertically if popover would overflow bottom edge
    if (top + popoverHeight > window.innerHeight) {
        top = rect.top - popoverHeight - padding; // position above trigger
    }

    // Prevent popover from going above the viewport
    if (top < padding) {
        top = padding; // clamp to top edge
    }

    popover.style.top = `${top}px`;
    popover.style.left = `${left}px`;
  }

  function trapFocus(popover) {
    const focusableElements = popover.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])');
    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    if (first) first.focus();

    popover.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }
});
/* Popover content end */

function elementReady(selector) {
    // https://www.basedash.com/blog/waiting-for-an-element-to-exist-with-javascript
    return new Promise((resolve, reject) => {
        const el = document.querySelector(selector);
        if (el) {
            resolve(el);
        }

        new MutationObserver((mutationRecords, observer) => {
            Array.from(document.querySelectorAll(selector)).forEach(element => {
                resolve(element);
                observer.disconnect();
            });
        })
        .observe(document.documentElement, {
            childList: true,
            subtree: true
        });
    });
}

// Debounce resize -> avoids rapid rebinds while resizing
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(setMenuBehaviours, 120); // 100–200ms is a good window
});

// (Optional) iOS/Android orientation changes trigger a resize too,
// but if you want to be explicit, you can also debounce this:
window.addEventListener('orientationchange', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(setMenuBehaviours, 120);
});

//Show focussed element
/*
document.addEventListener('focus', function() {
    console.log('focused: ', document.activeElement)
}, true);
*/


/* MutationObserver - wait for element to be available - useful for dynamically created content */
function waitForElement(elementId, callback) {
    const element = document.getElementById(elementId);
    if (element) {
        callback(element);
        return;
    }

    const observer = new MutationObserver((mutations, obs) => {
        const element = document.getElementById(elementId);
        if (element) {
            obs.disconnect();
            callback(element);
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}    



document.addEventListener('DOMContentLoaded', function() {

    // Ensure loading bar is appended to the body
    if (!document.querySelector('#loading-bar')) {
        $('body').append('<div id="loading-bar"></div>');
    }

    setMenuBehaviours();
    document.querySelector('#hamburger-toggler').addEventListener('click', toggleBurgerMenu);

    $('.accordion').accordion({
        collapsible: true
        ,heightStyle: 'content'
        ,active: false
    });

    $('#admin-bar').removeClass('hidden');

    $('video').hover(function (event) {
        if (event.type === "mouseenter") {
            $(this).attr("controls", "");
        } else if (event.type === "mouseleave") {
            $(this).removeAttr("controls");
        }
    });

    // De-obfuscate any obfuscated text, such as email addresses
    $('span.rot13').each(function(){
        var myText = $(this).html();
        myText = myText.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
        $(this).replaceWith(myText);
    });

    $('a[href^="mailto:"]:not([data-obfuscate])').each(function(){
        var myText = $(this).html();
        myText = myText.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
        $(this).replaceWith('<a href="mailto:' + myText + '">' + myText + '</a>');
    });

    //Deal with collapsible content
    document.querySelectorAll('.collapsible-control').forEach((item) => {
        item.addEventListener('click', function() {
            this.classList.toggle('collapsible-active');
            var content = this.nextElementSibling;
            if (content.style.display === 'block') {
            content.style.display = 'none';
            } else {
            content.style.display = 'block';
            }
        });
    });

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.querySelector('#scrollToTopButton').style.display = 'block';
        } else {
            document.querySelector('#scrollToTopButton').style.display = 'none';
        }
    }
    // When the user scrolls down 20px from the top of the document, show the scroll to top button
    window.onscroll = function() {scrollFunction()};

    document.querySelectorAll('.highlightOnClick').forEach((item) => {
        item.addEventListener('click', function() {
            highlightField(this.id);
        });
    });

    // Handle any download link events
    $('.downloadlink').on('click', function(e) {
        DownloadHandler($(this).data('language'), $(this).data('formid'), $(this).data('reference'), $(this).data('url'));
    });

    /* Apply data-group-control functionality to allow for collapsible content */
    controlrows = document.querySelectorAll('tr[data-group-control]');
    controlrows.forEach(row => {
        row.addEventListener('click', function handleClick(event) {
            groupname = row.getAttribute('data-group-control');
            row.classList.toggle('active');
            targetrows = document.querySelectorAll('tr[data-group-name=' + groupname + ']');
            targetrows.forEach(row => {
                row.classList.toggle('hidden');
            });
        });
    });

    /* Get notifications array from local storage */
    try {
        arrayLocalStorage = JSON.parse(localStorage.getItem('notifications')) || []; // Defaults to empty if undefined.
    }
    catch(err) {
        arrayLocalStorage = [];
    }

    /* Check whether notification has already been acknowledged by user */
    elements = document.querySelectorAll('.notification-bar');
    elements.forEach((item) => {
        notificationBarID = item.id;
        if (arrayLocalStorage.includes(notificationBarID)) {
            // If user has previously acknowledged notification, remove it from DOM.
            item.remove();
        }
        else {
            // Remove hidden class from notification to show it.
            item.classList.remove('hidden');
        }
    });

    /* Add listener for any notification bar close buttons */
    elements = document.querySelectorAll('.notification-close');
    elements.forEach((item) => {
        item.addEventListener('click', closeNotificationBar)
        item.addEventListener('keyup', closeNotificationBar)
    });

    /* Add listener for share page icon */
    elements = document.querySelectorAll('.share-page-icon');
    elements.forEach((item) => {
        item.addEventListener('click', function() {
            copyToClipboard(window.location.href, getLocalText('Page address copied to the clipboard'));
        });
        item.addEventListener('keyup', function(e) {
            // For accessibility - only respond to default 'click' action - i.e. Enter.
            if (e.key == 'Enter') {
                copyToClipboard(window.location.href, getLocalText('Page address copied to the clipboard'));
            }
        });
    });

    // Add click listener for elements with data-function - note global delegation, because some buttons may exist at DOMContentLoaded, but others are in dynamically created elements.
    document.addEventListener('click', (event) => {
        const element = event.target.closest('button[data-function], a[role="button"][data-function]');
        if (element) {
            /*
            if (element.tagName === 'A') {
                event.preventDefault();
            }
            */
            event.preventDefault();
            const functionPath = element.dataset.function;
            const params = element.dataset.params ? JSON.parse(element.dataset.params) : [];
            //console.log('Passed parameters', params);
            const targetFunction = functionPath.split('.').reduce((obj, key) => obj && obj[key], window);
            if (typeof targetFunction === 'function') {
                targetFunction(...params);
            } else {
                console.warn(`Function ${functionPath} not found`);
            }
        }
    });

    // Add change and keyup listeners for elements with data-function - note global delegation, because some buttons may exist at DOMContentLoaded, but others are in dynamically created elements.
    ['change', 'keyup'].forEach(eventType => {
        document.addEventListener(eventType, (event) => {
            const element = event.target.closest('[data-function]');
            if (element) {
                const functionPath = element.dataset.function;
                const params = element.dataset.params ? JSON.parse(element.dataset.params) : [];
                const targetFunction = functionPath.split('.').reduce((obj, key) => obj && obj[key], window);
                if (typeof targetFunction === 'function') {
                    targetFunction(...params);
                } else {
                    console.warn(`Function ${functionPath} not found`);
                }
            }
        });
    });   

    //Show loading bar when submit buttons pressed to prevent double-submits.
    const matches = document.querySelectorAll("input[type=submit], button[type=submit]");
    matches.forEach(button => {
        button.addEventListener('click', function handleClick(event) {
            //console.log('Form submitted');
            //console.log(event);
            showLoadingBar();
        });
    });

    //Add trigger to detect clicks on poster image overlays on BiliBili videos and play video in response
    const videoContainers = document.querySelectorAll('.ytThumbBox');

    videoContainers.forEach(container => {
        const poster = container.querySelector('img.poster');
        const iframe = container.querySelector('iframe');

        if (poster && iframe) {
            poster.addEventListener('click', () => {
                // Hide the poster image
                poster.style.display = 'none';
                container.classList.add('playing');
                // Update iframe src to enable autoplay
                const src = iframe.getAttribute('src');
                if (!src.includes('autoplay=1')) {
                    iframe.setAttribute('src', src.replace('autoplay=0', 'autoplay=1'));
                }
            });
        }
    });

});

// Code to prevent multiple submissions.
isSubmitting = false;


// Handle menu interactions for accessibility
const DEBUG = false; // Set to false to disable logging in production

// Per-link debounce utility for focusout
const focusoutTimeouts = new Map();
function debounceFocusout(func, wait) {
  return function (link) {
    const key = link; // Use element reference as unique key
    clearTimeout(focusoutTimeouts.get(key));
    focusoutTimeouts.set(key, setTimeout(() => {
      func(link);
      focusoutTimeouts.delete(key);
    }, wait));
  };
}

// Reflect current CSS visibility into aria-expanded
function updateAriaExpanded(toggle) {
  const submenu = toggle.nextElementSibling;
  if (!submenu) {
    if (DEBUG) console.error(`No submenu found for toggle: ${toggle.textContent.trim()}`);
    return;
  }
  const isVisible = window.getComputedStyle(submenu).display !== 'none';
  toggle.setAttribute('aria-expanded', isVisible ? 'true' : 'false');
  if (DEBUG) console.log(`[expanded] ${toggle.textContent.trim()} => ${isVisible}`);
}

const debouncedUpdateAriaExpanded = debounceFocusout(updateAriaExpanded, 200);

function setupMenuListeners() {
  const parentItems = document.querySelectorAll('nav.main-menu li.parent');
  if (!parentItems.length) {
    if (DEBUG) console.warn('No li.parent elements found in nav.main-menu');
    return false;
  }
  if (DEBUG) console.log('Found', parentItems.length, 'parent menu items');

  const isMobile = window.innerWidth <= 992;

  parentItems.forEach(parentLi => {
    // Parent toggle can be <button> (preferred) or legacy <a> without href
    const toggle = parentLi.querySelector(':scope > button');
    if (!toggle) return;

    // Ensure expected attributes
    if (!toggle.hasAttribute('aria-haspopup')) toggle.setAttribute('aria-haspopup', 'true');
    if (toggle.tagName !== 'BUTTON' && !toggle.hasAttribute('tabindex')) toggle.setAttribute('tabindex', '0');

    // Initial sync
    updateAriaExpanded(toggle);

    // Mouse/focus sync
    parentLi.addEventListener('mouseenter', () => updateAriaExpanded(toggle));
    parentLi.addEventListener('mouseleave', () => setTimeout(() => updateAriaExpanded(toggle), 200));
    toggle.addEventListener('focus', () => updateAriaExpanded(toggle));
    parentLi.addEventListener('focusout', () => {
      setTimeout(() => {
        if (!parentLi.contains(document.activeElement)) {
          debouncedUpdateAriaExpanded(toggle);
        }
      }, 200);
    });

    // Keyboard behavior: Enter/Space into submenu; Esc back to toggle
    toggle.addEventListener('keydown', (event) => {
      const key = event.key;
      const submenu = toggle.nextElementSibling;
      if (!submenu) return;

      if (key === 'Enter' || key === ' ') {
        event.preventDefault();
        event.stopPropagation();
        const first = submenu.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
        if (first && typeof first.focus === 'function') first.focus();
        setTimeout(() => updateAriaExpanded(toggle), 60);
      } else if (key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        toggle.focus();
        setTimeout(() => updateAriaExpanded(toggle), 60);
      }
    });

    // Desktop-only click behavior (prevents conflicts with mobile toggling)
    if (!isMobile) {
      toggle.addEventListener('click', (event) => {
        const submenu = toggle.nextElementSibling;
        if (!submenu) return;

        const isOpen = toggle.getAttribute('aria-expanded') === 'true';
        if (isOpen) {
          toggle.focus();
        } else {
          const first = submenu.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
          if (first && typeof first.focus === 'function') first.focus();
        }
        setTimeout(() => updateAriaExpanded(toggle), 60);
      });
    }
  });

  // Submenu links: Space/Enter activate; Esc returns to parent toggle
  document.querySelectorAll('nav.main-menu ul.child li > a').forEach(submenuLink => {
    // No roles on true links
    if (!submenuLink.hasAttribute('tabindex')) submenuLink.setAttribute('tabindex', '0');

    submenuLink.addEventListener('keydown', (event) => {
      const key = event.key;
      const submenu = submenuLink.closest('ul.child');
      const parentToggle = submenu?.closest('li.parent')?.querySelector(':scope > button, :scope > a:not([href])');

      if (key === 'Enter' || key === ' ') {
        event.preventDefault();
        event.stopPropagation();
        submenuLink.click();
      } else if (key === 'Escape') {
        if (parentToggle) {
          event.preventDefault();
          event.stopPropagation();
          parentToggle.focus();
          setTimeout(() => updateAriaExpanded(parentToggle), 60);
        }
      }
    });
  });

  return true;
}

function initializeMenu() {
  // Initial aria-expanded sync for all current toggles
  document.querySelectorAll('nav.main-menu li.parent > button')
    .forEach(toggle => {
      if (!toggle.hasAttribute('aria-haspopup')) toggle.setAttribute('aria-haspopup', 'true');
      if (toggle.tagName !== 'BUTTON' && !toggle.hasAttribute('tabindex')) toggle.setAttribute('tabindex', '0');
      updateAriaExpanded(toggle);
    });

  // Set up listeners (with retry handled outside)
  setupMenuListeners();
}

// Debug helper
function debugMenu() {
  if (!DEBUG) return;
  const mainMenu = document.querySelector('nav.main-menu') || document.querySelector('nav#main-menu');
  console.log('DOM debug: main-menu-container exists?', !!document.querySelector('.main-menu-container'));
  console.log('DOM debug: nav#main-menu exists?', !!document.querySelector('nav#main-menu'));
  console.log('DOM debug: nav.main-menu exists?', !!document.querySelector('nav.main-menu'));
  console.log('DOM debug: parent toggles found?', document.querySelectorAll('nav.main-menu li.parent > button').length);
  console.log('DOM debug: nav menu display?', mainMenu ? window.getComputedStyle(mainMenu).display : 'not found (null)');
}

// Retry if HTML arrives late
function waitAndSetup() {
  let attempts = 0;
  const timer = setInterval(() => {
    attempts++;
    const ok = !!document.querySelector('nav.main-menu li.parent > button');
    if (ok) {
      clearInterval(timer);
      initializeMenu();
      if (DEBUG) console.log('Menu initialized after retry');
    } else if (attempts >= 20) {
      clearInterval(timer);
      if (DEBUG) console.warn('Menu not found after retries; aborting setup');
    }
  }, 500);
}

// Boot
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initializeMenu();
    waitAndSetup();
    debugMenu();
  });
} else {
  initializeMenu();
  waitAndSetup();
  debugMenu();
}

/* ------------------------------------------------------------------ */
/* Mobile-only delegated submenu toggle (belt-and-suspenders fallback) */
/* ------------------------------------------------------------------ */
document.addEventListener('click', (e) => {
  // Only in small-screen mode
  if (window.innerWidth > 992) return;

  // Clicks on parent toggles: <button> or <a> without href
  const toggle = e.target.closest('nav#main-menu li.parent > button, nav#main-menu li.parent > a:not([href])');
  if (!toggle) return;

  e.preventDefault();
  e.stopPropagation();

  const parentLi = toggle.closest('nav#main-menu li.parent');
  if (!parentLi) return;

  // Find the (direct) submenu safely
  const submenu = parentLi.querySelector('ul.child');
  if (!submenu) return;

  const isOpen = window.getComputedStyle(submenu).display !== 'none';
  submenu.style.display = isOpen ? 'none' : 'block';
  toggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
});

function AJAXSelect(structInputParams) {
    /*
    attribs:
    url: url to call to obtain values
    label: Label of field to be generated
    params: content to pass through to Ajax function
        params.required: boolean of whether field is required or not.
        params.default: optional default value to be selected.
        params.pleaseChooseText: Disabled "Please choose" option
    response: array of arrays. Each child array should comprise following:
        Position 0: item value
        Position 1: item display text
        Position 2: boolean indicating item should be selected
    attribs.id: DOM ID of field to be generated
    success: callback function to call on success
    PassThroughParams: parameters to pass through to callback function to process on success
    JSONURLParams: If the JSONURLParams parameter is passed in, parameters are being passed in separate from URL
    */

    //console.log(structInputParams.params);
    var ajaxParams = {
        url: structInputParams.url
        ,cache: false
        ,method: 'POST'
        ,dataType: 'json'
        ,success: function(response) {
            //console.log('Currently in AJAXSelect success section');
            var sel = '';
            /*
            var sel += '<select';
            for (const [key, value] of Object.entries(structInputParams.attribs)) {
                sel += ' ' + key + '="' + value + '"';
            }
            sel += '>';
            */
            var i;
            if (response.length) {
                //console.log('structInputParams', structInputParams);
                //console.log('structInputParams.params', structInputParams.params);

                if (structInputParams.includeLabelAsPleaseChooseText) {
                    sel += '<option value="" selected disabled>';
                    sel += structInputParams.label;
                    sel += '</option>';
                }
                else {
                    sel += '<option value="" selected disabled>';
                    sel += structInputParams.params.pleaseChooseText || 'Please choose';
                    sel += '</option>';
                }

                /*
                if (!structInputParams.params.required) {
                    sel += '<option value="">';
                    sel += 'No selection';
                    sel += '</option>';
                }
                */

                for (i = 0; i < response.length; i++) {
                    sel += '<option value="';
                    sel += response[i][0];
                    sel +=  '"';
                    if (response[i][0] == structInputParams.params.default) {
                        sel += ' selected="selected"';
                    }
                    sel +=  '>';
                    sel += response[i][1];
                    sel += '</option>';
                }
            }
            /*
            sel += '</select>';
            */
            //console.log('Select ID: ' + structInputParams.attribs.id);
            $('#' + structInputParams.attribs.id).html(sel);
            if (structInputParams.success) {
                if (!structInputParams.PassThroughParams) {
                    structInputParams.success();
                }
                else {
                    structInputParams.success(structInputParams.PassThroughParams);
                }
            }

            //console.log('RESPONSE', response);

            if (response.length) {
                //console.log('ShowFieldContainer: ', structInputParams.attribs.id)
                ShowFieldContainer(structInputParams.attribs.id);
            }
            else {
                //console.log('HideFieldContainer: ', structInputParams.attribs.name)
                HideFieldContainer(structInputParams.attribs.id);
            }
            if (structInputParams.params.conditional_actions !== undefined) {
                //CheckConditions(structInputParams.params.htmlformID);
                ShowOrHideFieldset(structInputParams.attribs.id);
            }

        }
        ,error: function(ErrorMsg){
            console.log(ErrorMsg);
        }
    };
    if (structInputParams.params) {//If the JSONURLParams parameter is passed in, parameters are being passed in separate from URL
        ajaxParams.data = structInputParams.params;
    }
    $.ajax(ajaxParams);
}

function GetSelectFromCSV(structInputParams) {
    structInputParams = { ...structInputParams,  ...JSON.parse(structInputParams.fieldDefinitionJSON) }; // Merges javascript objects using spread syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    delete structInputParams['fieldDefinitionJSON'];
    //console.log('OBJECT');
    //console.log(structInputParams);
    if (!structInputParams.default) {
        structInputParams.default = null;
    }
    structInputParams.function = 'getFieldValuesFromCSV'; // Simply add to input params to pass through
    var structMyParams = {
        label: structInputParams.label
        ,attribs: {
            id: structInputParams.id
            ,name: structInputParams.name
        }
        ,url: '/common/class.forms.php'
        ,params: structInputParams
        ,success: function(response) {
            if (structInputParams.callback) {
                //See https://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string
                window[structInputParams.callback]();
            }
        }
    }

    // Add form ID and fieldname if these are passed through (required for selectonce fields)
    if (structInputParams.formID) {
        structMyParams.params.formID = structInputParams.formID;
    }
    if (structInputParams.fieldname) {
        structMyParams.params.fieldname = structInputParams.fieldname;
    }

    if (structInputParams.parentformfield) {
        parentformfieldvalue = getFormFieldValue(structMyParams.params.htmlformID,structInputParams.parentformfield);
        structMyParams.params.parentformfieldvalue = parentformfieldvalue;
    }
    if (structInputParams.parentcolumn) {
        structMyParams.params.parentcolumn = structInputParams.parentcolumn;
    }
    //console.log('structMyParams', structMyParams);
    AJAXSelect(structMyParams);
}

function GetRadioFromCSV(structInputParams) {
    structInputParams = { ...structInputParams,  ...JSON.parse(structInputParams.fieldDefinitionJSON) }; // Merges javascript objects using spread syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    delete structInputParams['fieldDefinitionJSON'];
    if (!structInputParams.default) {
        structInputParams.default = null;
    }
    structInputParams.function = 'getFieldValuesFromCSV'; // Simply add to input params to pass through
    var structMyParams = {
        label: structInputParams.label
        ,attribs: {
            id: structInputParams.id
            ,name: structInputParams.name
        }
        ,url: '/common/class.forms.php'
        ,params: structInputParams
        ,success: function(response) {
            if (structInputParams.callback) {
                //See https://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string
                window[structInputParams.callback]();
            }
        }
    }

    // Add form ID and fieldname if these are passed through (required for selectonce fields)
    if (structInputParams.formID) {
        structMyParams.params.formID = structInputParams.formID;
    }
    if (structInputParams.fieldname) {
        structMyParams.params.fieldname = structInputParams.fieldname;
    }

    if (structInputParams.parentformfield) {
        parentformfieldvalue = getFormFieldValue(structMyParams.params.htmlformID,structInputParams.parentformfield);
        structMyParams.params.parentformfieldvalue = parentformfieldvalue;
    }
    if (structInputParams.parentcolumn) {
        structMyParams.params.parentcolumn = structInputParams.parentcolumn;
    }
    AJAXRadio(structMyParams);
}

function AJAXRadio(structInputParams) {
    var ajaxParams = {
        url: structInputParams.url
        ,cache: false
        ,method: 'POST'
        ,dataType: 'json'
        ,success: function(response) {
            var sel = '';
            var i;
            if (response.length) {
                for (i = 0; i < response.length; i++) {
                    sel += '<label>';
                    sel += '<input type="radio" name="' + structInputParams.attribs.name + '"';
                    sel += ' id="' + structInputParams.attribs.name + '-' +  response[i][0] + '"';
                    sel += ' value="' + response[i][0] + '"';
                    sel += ' class=""';
                    if (response[i][2] == 1) {
                        sel += ' checked';
                    }
                    sel += ' />';
                    sel += '<span>' + response[i][1] + '</span>';
                    sel += '</label>';
                }
            }
            $('#FieldOptionsContainer-' + structInputParams.attribs.id + ' div.radio').html(sel);
            if (structInputParams.success) {
                if (!structInputParams.PassThroughParams) {
                    structInputParams.success();
                }
                else {
                    structInputParams.success(structInputParams.PassThroughParams);
                }
            }

            if (response.length) {
                //console.log('ShowFieldContainer: ', structInputParams.attribs.id)
                ShowFieldContainer(structInputParams.attribs.id);
            }
            else {
                //console.log('HideFieldContainer: ', structInputParams.attribs.id)
                HideFieldContainer(structInputParams.attribs.id);
            }
            if (structInputParams.params.conditional_actions !== undefined) {
                //CheckConditions(structInputParams.params.htmlformID);
                ShowOrHideFieldset(structInputParams.attribs.id);
            }

        }
        ,error: function(ErrorMsg){
            console.log(ErrorMsg);
        }
    };
    if (structInputParams.params) {//If the JSONURLParams parameter is passed in, parameters are being passed in separate from URL
        ajaxParams.data = structInputParams.params;
    }
    $.ajax(ajaxParams);
}

function GetCheckboxFromCSV(structInputParams) {
    structInputParams = { ...structInputParams,  ...JSON.parse(structInputParams.fieldDefinitionJSON) }; // Merges javascript objects using spread syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    delete structInputParams['fieldDefinitionJSON'];
    if (!structInputParams.default) {
        structInputParams.default = null;
    }
    structInputParams.function = 'getFieldValuesFromCSV'; // Simply add to input params to pass through
    var structMyParams = {
        label: structInputParams.label
        ,attribs: {
            id: structInputParams.id
            ,name: structInputParams.name
        }
        ,url: '/common/class.forms.php'
        ,params: structInputParams
        ,success: function(response) {
            if (structInputParams.callback) {
                //See https://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string
                window[structInputParams.callback]();
            }
        }
    }

    // Add form ID and fieldname if these are passed through (required for selectonce fields)
    if (structInputParams.formID) {
        structMyParams.params.formID = structInputParams.formID;
    }
    if (structInputParams.fieldname) {
        structMyParams.params.fieldname = structInputParams.fieldname;
    }

    if (structInputParams.parentformfield) {
        parentformfieldvalue = getFormFieldValue(structMyParams.params.htmlformID,structInputParams.parentformfield);
        structMyParams.params.parentformfieldvalue = parentformfieldvalue;
    }
    if (structInputParams.parentcolumn) {
        structMyParams.params.parentcolumn = structInputParams.parentcolumn;
    }
    AJAXCheckbox(structMyParams);
}

function AJAXCheckbox(structInputParams) {
    var ajaxParams = {
        url: structInputParams.url
        ,cache: false
        ,method: 'POST'
        ,dataType: 'json'
        ,success: function(response) {
            var sel = '';
            var i;
            if (response.length) {
                for (i = 0; i < response.length; i++) {
                    sel += '<label>';
                    sel += '<input type="checkbox" name="' + structInputParams.attribs.name + '[]"';
                    sel += ' id="' + structInputParams.attribs.name + '-' +  response[i][0] + '"';
                    sel += ' value="' + response[i][0] + '"';
                    sel += ' class=""';
                    if (response[i][2] == 1) {
                        sel += ' checked';
                    }
                    sel += ' />';
                    sel += '<span>' + response[i][1] + '</span>';
                    sel += '</label>';
                }
            }
            $('#FieldOptionsContainer-' + structInputParams.attribs.id + ' div.checkbox').html(sel);
            if (structInputParams.success) {
                if (!structInputParams.PassThroughParams) {
                    structInputParams.success();
                }
                else {
                    structInputParams.success(structInputParams.PassThroughParams);
                }
            }

            if (response.length) {
                //console.log('ShowFieldContainer: ', structInputParams.attribs.id)
                ShowFieldContainer(structInputParams.attribs.id);
            }
            else {
                //console.log('HideFieldContainer: ', structInputParams.attribs.id)
                HideFieldContainer(structInputParams.attribs.id);
            }
            if (structInputParams.params.conditional_actions !== undefined) {
                //CheckConditions(structInputParams.params.htmlformID);
                ShowOrHideFieldset(structInputParams.attribs.id);
            }

        }
        ,error: function(ErrorMsg){
            console.log(ErrorMsg);
        }
    };
    if (structInputParams.params) {//If the JSONURLParams parameter is passed in, parameters are being passed in separate from URL
        ajaxParams.data = structInputParams.params;
    }
    $.ajax(ajaxParams);
}

function AJAXGetHTML(structInputParams) {
    // Updates a target element with HTML from a remote call.
    var ajaxParams = {
        url: structInputParams.url
        ,cache: false
        ,method: 'POST'
        ,dataType: 'html'
        ,success: function(response) {
            $(structInputParams.jqueryTarget).html(response);
        }
        ,error: function(ErrorMsg){
            console.log(ErrorMsg);
            $(structInputParams.jqueryTarget).html(ErrorMsg.responseText);
        }
    };
    if (structInputParams.params) {//If the JSONURLParams parameter is passed in, parameters are being passed in separate from URL
        ajaxParams.data = structInputParams.params;
    }
    $.ajax(ajaxParams);
}

function getFormFieldValue(htmlformID,fieldName) {
    // This function is field type agnostic and returns a comma-separated list where
    // multiple values exist for a form field.

    //console.log('Inside function getFormFieldValue');
    //console.log('htmlformID: ' + htmlformID);
    //console.log('fieldName: ' + fieldName);

    var formdata = $('#' + htmlformID).serializeArray();
    var result = [];
    var type = '';
    var multipleValues = false;
    for (var x in formdata) {
        if (formdata[x].name === fieldName) {
            result.push(formdata[x].value);
            multipleValues = false;
            break;
        }
        else if (formdata[x].name === fieldName + '[]') {
            result.push(formdata[x].value);
            multipleValues = true;
        }
    }    
    var resultAsList = result.join();

    if (multipleValues == false) {
        type = $('#' + htmlformID + ' [name="' + fieldName + '"]').prop('nodeName');
    }
    else {
        type = $('#' + htmlformID + ' [name="' + fieldName + '[]"]').prop('nodeName');
    }

    return resultAsList;
    
}

function addLangToEditorIFrame(inst) {
    $('iframe').each(function () {
        if ($('form [name="language"]')) {
            language = $('form [name="language"]').val();
        }
        var iframe_contents = $(this).contents();
        iframe_contents.find('html').attr("lang", language);
    });
}

function AJAXDataList(structInputParams) {
    /*
    attribs:
    id: DOM ID of field to be generated
    url: url to call to obtain values
    response: array of arrays. Each child array should comprise following:
        Position 0: item value
        Position 1: item display text
    */

    //console.log(structInputParams.params);
    var ajaxParams = {
        url: structInputParams.url
        ,cache: false
        ,method: 'POST'
        ,dataType: 'json'
        ,success: function(response) {
            var sel = '';
            //var sel = '<datalist id="' + structInputParams.id + '">';
            var i;
            if (response.length) {
                for (i = 0; i < response.length; i++) {
                    sel += '<option value="';
                    sel += response[i][0];
                    sel +=  '">';
                    sel += response[i][1];
                    sel += '</option>';
                }
            }
            //sel += '</datalist>';
            $('#' + structInputParams.id).html(sel);
            if (structInputParams.success) {
                if (!structInputParams.PassThroughParams) {
                    structInputParams.success();
                }
                else {
                    structInputParams.success(structInputParams.PassThroughParams);
                }
            }
        }
        ,error: function(ErrorMsg){
            console.log(ErrorMsg);
        }
    };
    if (structInputParams.data) {//If the JSONURLParams parameter is passed in, parameters are being passed in separate from URL
        ajaxParams.data = structInputParams.data;
    }
    $.ajax(ajaxParams);
}

function ShowOrHideFieldset(fieldID) {
    var fieldsInFieldSetCount = $('#' + fieldID).closest('fieldset').find('.FieldContainer').length;
    var fieldsHiddenInFieldSetCount = $('#' + fieldID).closest('fieldset').find('.FieldContainer.hidden').length;
    //console.log('Fields in fieldset for ' + $('#' + fieldID)+ ': ' + fieldsInFieldSetCount);
    //console.log('Fields hidden in fieldset for ' + $('#' + fieldID)+ ': ' + fieldsHiddenInFieldSetCount);
    if ( fieldsInFieldSetCount != fieldsHiddenInFieldSetCount ) {
        $('#' + fieldID).closest('fieldset').removeClass('hidden');
    }
    else {
        $('#' + fieldID).closest('fieldset').addClass('hidden');
    }
}


/**
 * Force-remove 'hidden' class and inline display:none from all descendants
 * of the FieldContainer for a given base field ID.
 */
function UnhideDescendants(fieldID) {
  const $container = $('#FieldContainer-' + fieldID);

  // Remove 'hidden' class from any nested elements (inputs, labels, spans, etc.)
  $container.find('.hidden').removeClass('hidden');

  // Clear any inline display:none that may persist
  $container.find('*').each(function () {
    const currentDisplay = $(this).css('display');
    if (currentDisplay === 'none') {
      $(this).css('display', ''); // reset to stylesheet/default
    }
  });
}


function ShowFieldContainer(fieldID) {
  const $container = $('#FieldContainer-' + fieldID);
  const $field = $('#' + fieldID);
  const type = $field.data('type');

  // For selects and subdivision fields, only show if there are real (non-disabled) options
  if (type === 'select' || type === 'subdivision') {
    const el = document.getElementById(fieldID);
    const nonDisabledOptions = el
      ? el.querySelectorAll('option:not([disabled])').length
      : 0;

    if (nonDisabledOptions > 0) {
      $field.removeClass('hidden');
      $container.removeClass('hidden');
      UnhideDescendants(fieldID);           // <-- ensure descendants are visible
      ShowOrHideFieldset(fieldID);
    } else {
      $field.addClass('hidden');
      $container.addClass('hidden');
      ShowOrHideFieldset(fieldID);
    }
    return;
  }

  // For checkbox/radio groups, the base #fieldID isn't an input; unhide container + descendants
  if (type === 'checkbox' || type === 'radio') {
    $container.removeClass('hidden');
    UnhideDescendants(fieldID);             // <-- key line for your case
    ShowOrHideFieldset(fieldID);
    return;
  }

  // Default: show container for all other field types
  $field.removeClass('hidden');
  $container.removeClass('hidden');
  UnhideDescendants(fieldID);               // <-- safe no-op if nothing was hidden
  ShowOrHideFieldset(fieldID);
}


function HideFieldContainer(fieldID) {
  const $container = $('#FieldContainer-' + fieldID);
  const type = $container.data('field-type');
  const fieldName = $container.data('field-name'); // reliable name

  // Reset values by field type (using the true field name)
  switch (type) {
    case 'subdivision':
      // Clear down any previously returned values in subdivision field
      $('#' + fieldID).find('[value!=""]').remove();
      break;

    case 'checkbox':
      // Reset selection
      $(`[name="${fieldName}[]"]`).each(function () {
        this.checked = this.defaultChecked;
      });
      // Optionally re-hide inputs in the container
      $container.find('input[type="checkbox"]').addClass('hidden');
      break;

    case 'radio':
      $(`[name="${fieldName}"]`).each(function () {
        this.checked = this.defaultChecked;
      });
      // Optionally re-hide inputs in the container
      $container.find('input[type="radio"]').addClass('hidden');
      break;

    default:
      const inputByName = document.querySelector(`[name="${fieldName}"]`);
      if (inputByName !== null) {
        let defaultValue;
        const explicitDefault = $('#' + fieldID).data('default');
        if (explicitDefault !== undefined) {
          defaultValue = explicitDefault;
        } else if (inputByName.defaultValue !== undefined) {
          defaultValue = inputByName.defaultValue;
        } else {
          defaultValue = '';
        }
        $('#' + fieldID).val(defaultValue);
      }
      break;
  }

  // Hide the container itself
  $container.addClass('hidden');

  // Maintain fieldset visibility state
  ShowOrHideFieldset(fieldID);
}

function CheckConditions(formID) {
    console.log(`In CheckConditions with formID ${formID} and we're checking the following fields:`);
    const fieldIds = [];
    const containers = document.querySelectorAll(`#${formID} .FieldContainer[data-conditional-actions]`);
    
    containers.forEach(container => {
        const fieldId = container.dataset.fieldId;
        if (fieldId) {
            fieldIds.push(fieldId);
        }
    });
    
    console.log(fieldIds);
    fieldIds.forEach(fieldId => {
        CheckConditionsAjaxCall(fieldId, formID);
    });
}


function CheckConditionsAjaxCall(fieldId, formId) {
  console.log(`Checking conditions for field: ${fieldId}`);

  // Target the FieldContainer carrying the conditional metadata for this field
  const fieldContainer = document.querySelector(
    `#${formId} .FieldContainer[data-field-id="${fieldId}"]`
  );

  if (!fieldContainer) {
    console.error(`FieldContainer for base ID ${fieldId} not found`);
    return;
  }

  const fieldContainerId = fieldContainer.id;
  const conditionalActions = fieldContainer.dataset.conditionalActions || '';

  // Serialize full form data
  const form = document.getElementById(formId);
  const formData = new FormData(form);
  const serializedData = new URLSearchParams(formData).toString();

  console.log(`Form ID: ${formId}, FieldContainer ID: ${fieldContainerId}`);
  $.ajax({
    type: 'post',
    url: '/common/class.forms.php?method=CheckConditions',
    data: `${serializedData}&fieldID="${fieldId}"&conditional_actions="${conditionalActions}"`,
    cache: false,
    processData: false,
    success: function (response) {
      // PHP echoes response + <br />; take the first line only
      response = response.split('<br />')[0];
      switch (response) {
        case 'show':
          ShowFieldContainer(fieldId);
          break;
        case 'hide':
          HideFieldContainer(fieldId);
          break;
      }
    }
  });
}


// Add visitor ID for Pardot / Salesforce Account Engagement to forms
// Handle in application code rather than javascript
/*
document.addEventListener('DOMContentLoaded', function () {
    piAIdInt = Number.isInteger(parseInt(piAId)) ? parseInt(piAId) - 1000 : '';
    myCookie = read_cookie('visitor_id' + piAIdInt);
    if (myCookie) {
        fields = document.querySelectorAll('input[name="pardot_visitor_id"]');
	fields.forEach(field => {
	    field.value = myCookie;
    });
    }
}, false);
*/

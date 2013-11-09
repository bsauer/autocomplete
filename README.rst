==============================
Autocomplete Browser Extension
==============================

Modern web browsers allow you to store passwords and autofill or autocomplete forms.
Some websites prevent this behavior by setting the autocomplete attribute to "off".

Here is an example of a form that prevents autofill::

    <form name="exampleForm" method="post" action="DoSomething" onsubmit="javascript:return WebForm_OnSubmit();" id="eampleForm">
        <span id="passwordLabel">Password:</span>
        <br \>
        <input name="passwordInput" type="password" id="passwordInput" autocomplete="off">
    </form>

By using this extension, the autocomplete attribute is removed and Safari or your browser of choice will save your
password and autofill it the next time you visit the site.  This is especially nice with Apple's new iCloud Keychain 
integration.

Currently supported browsers: 
-----------------------------

* Safari 5.0+

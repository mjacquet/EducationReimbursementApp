({
	handlepoc: function (component, event) {
        // Get the list of uploaded files
        var uploadedFiles = event.getParam("files");
        component.set("v.request.Proof_of_completion__c",uploadedFiles[0].documentId);
        component.find("requestHandler").saveRecord($A.getCallback(function(saveResult) {
            // NOTE: If you want a specific behavior(an action or UI behavior) when this action is successful 
            // then handle that in a callback (generic logic when record is changed should be handled in recordUpdated event handler)
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
   
                // handle component related logic in event handler
            } else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                console.log('Problem saving record, error: ' + JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
        }));

    },
    handleinvoice: function (component, event) {
        // Get the list of uploaded files
        var uploadedFiles = event.getParam("files");
        component.set("v.request.Invoice__c",uploadedFiles[0].documentId);
        component.find("requestHandler").saveRecord($A.getCallback(function(saveResult) {
            // NOTE: If you want a specific behavior(an action or UI behavior) when this action is successful 
            // then handle that in a callback (generic logic when record is changed should be handled in recordUpdated event handler)
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
   
                // handle component related logic in event handler
            } else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                console.log('Problem saving record, error: ' + JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
        }));

    }
    

})
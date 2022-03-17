app.service('myService', function () {
    this.message = 'test';
    this.setMessage = function (newMessage) {
        this.message = newMessage;
        return this.message;
    };

    
});
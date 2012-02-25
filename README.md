try_ - a natural control flow library for JavaScript
====================================================

How do you control flows which can go wrong in synchronous situations?

You use try-catch.

How do you return your results in synchronous situations?

You use return.

How do you return when something goes wrong?

You throw an exception.

Enter try_. The try_ control flow library is to help you take over control flow issues, with using a natural way of doing it.

Example:

    try_(some_object, some_object.some_async_call_).(function(result){
        //do some stuff with the result
    }).catch_(function(exception){
        //in case something bad happened, process it here
    }).finally_(function(){
        //run your cleanups here
    }();

    some_object.some_async_call_ = function(){
        var return_ = get_return_cb(arguments);
        var throw_ = get_throw_cb(arguments);
        $.ajax({
          success: function(responsetext){
            return_(responsetext);
          },
          error: function(responsetext){
            throw_({code: 101, message: responsetext});
          }
        });
    }

The try_ library is licensed under Simplified BSD, which means basically that if you use it you have to acknowledge that it originally comes from me, but otherwise you do whatever you want. For the license text see: http://www.opensource.org/licenses/bsd-license.php

*Give it a try_...*

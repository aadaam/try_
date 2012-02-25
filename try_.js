(function(scope){
  scope.get_return_cb = function(args){
    return function(result){ 
      return args[0].call(args[1], null, result);
    };
  };
  scope.get_throw_cb = function(args){
    return function(err, result){
      return args[0].call(args[1], err, result);
    };
  };
  scope.try_ = function(obj,a_fn,ctx){
   var truecallback = function(){};
   var catch_fn = function(){};
   var finally_fn = function(){};
   var callback_fn = function(err, result){
    if (!err){
      truecallback.call(ctx ||this, result);
    } else {
      catch_fn.call(ctx ||this, err);
    }
    finally_fn.call(ctx || this);
   };
   var exec_fn = function(){
    a_fn.call(obj, callback_fn, ctx || this);
   };
   var on_result = function(my_truecallback){
    truecallback = my_truecallback;
    return exec_fn;
   };
   exec_fn.catch_ = function(my_catch_fn){
    catch_fn = my_catch_fn;
    return exec_fn;
   };
   exec_fn.finally_ = function(my_finally_fn){
    finally_fn = my_finally_fn;
    return exec_fn;
   };
   return on_result;
  };
})(window ? window : exports);
/*
try_(obj,async_fn)(function(result){
}).catch_(function(err){
}).finally_(function(){
})()
*/

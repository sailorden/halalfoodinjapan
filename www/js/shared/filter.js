//Filter epochToDate :
//Use for convert epoch date format to default date format.
//Example :
//<p>{{item.createdAt |epochToDate | date:"short"}}</p>
appControllers.filter('epochToDate', function ($filter) {
    return function (input) {
        return new Date(Date(input));
    };
});// End Filter epochToDate.

//Filter numberSuffix :
//Use for convert number to have suffix 1,000 to 1K.
//Example :
//{{item.likes.summary.total_count | numberSuffix}}
//
appControllers.filter('numberSuffix', function () {
    return function (input) {
        var exp;
        var suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];

        if (window.isNaN(input)) {
            return 0;
        }

        if (input < 1000) {
            return input;
        }

        exp = Math.floor(Math.log(input) / Math.log(1000));

        return (input / Math.pow(1000, exp)).toFixed(1) + suffixes[exp - 1];
    }
});// End Filter numberSuffix.

appControllers.filter('myfilter', function () {
    
         return function( items, types) {
    var filtered = [];
    
    
    angular.forEach(items, function(item) {
       if(types.luxury == false && types.double_suite == false) {
          filtered.push(item);
        }
        else if(types.luxury == true && types.double_suite == false && item.type == 'luxury'){
          filtered.push(item);
        }
        else if(types.double_suite == true && types.luxury == false && item.type == 'double suite'){
          filtered.push(item);
        }
    });
  
    return filtered;
  };

});// End Filter numberSuffix.
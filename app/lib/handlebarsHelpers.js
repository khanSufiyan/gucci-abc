var _ = require('underscore');
/**
 * We inject the Handlebars instance, because this module doesn't know where
 * the actual Handlebars instance will come from.
 */
module.exports = function(Handlebars) {
  
  return {

      copyright: function(year) {
        return new Handlebars.SafeString("&copy;" + year);
      },

      log: function(something) {
    		console.log(something);
    	},

    	splitUrl: function(url,index) {
        if(url){
          var t = url.split("@");
          return t[index];
        }
        return [];
    	},

      math: function(lvalue, operator, rvalue, options) {
        lvalue = parseFloat(lvalue);
        rvalue = parseFloat(rvalue);
            
        return {
            "+": lvalue + rvalue,
            "-": lvalue - rvalue,
            "*": lvalue * rvalue,
            "/": lvalue / rvalue,
            "%": lvalue % rvalue
        }[operator];
      },

      when: function(operand_1, operator, operand_2, options) {
          var operators = {
            'eq': function(l,r) { return l == r; },
            'noteq': function(l,r) { return l != r; },
            'gt': function(l,r) { return Number(l) > Number(r); },
            'lt': function(l,r) { return Number(l) < Number(r); },
            'or': function(l,r) { return l || r; },
            'and': function(l,r) { return l && r; },
            '%': function(l,r) { return (l % r) === 0; },
            '!%': function(l,r) { return (l % r) === 1; }
          }
          , result = operators[operator](operand_1,operand_2);

          if (result) return options.fn(this);
          else return options.inverse(this);
      },

      sanitize: function(str) {
          return str.replace(/\W/g, '');
      },

      replace: function(str, replaceString, replaceStringWith, options) {
          if (str != null) return str.replace(replaceString, replaceStringWith);
          else return str;
      }


  		
  };
};

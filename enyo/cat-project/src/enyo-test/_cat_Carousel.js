_cat.core.declare('enyo-test.Carousel.enyoNext$$cat', {
  scrap: {
    "name": ["enyoNext"],
    "context": ["thi$", "pagesList"],
    "enyo": ["next(pagesList)"],
    "assert": ["ok(true, \"Fake test\")"],
    "file": "/home/arik/dev/projects/lastboy/catjs/test/enyo/cat-project/target/enyo-test/Carousel.js",
    "scrapinfo": {
      "start": {
        "line": 108,
        "col": 13
      },
      "end": {
        "line": 113,
        "col": 15
      }
    },
    "commentinfo": {
      "start": {
        "line": 107,
        "col": 8
      },
      "end": {
        "line": 114,
        "col": 11
      }
    },
    "single": {
      "name": true,
      "context": false,
      "enyo": false,
      "assert": false,
      "file": true,
      "scrapinfo": true,
      "commentinfo": true,
      "single": true,
      "singleton": true,
      "arguments": true,
      "auto": true,
      "injectcode": true,
      "id": true,
      "$type": true,
      "numCommands": true
    },
    "singleton": {
      "name": -1,
      "context": 1,
      "enyo": -1,
      "assert": -1,
      "file": -1,
      "scrapinfo": -1,
      "commentinfo": -1,
      "single": -1,
      "singleton": -1,
      "arguments": -1,
      "auto": -1,
      "injectcode": -1,
      "id": -1,
      "$type": -1,
      "numCommands": -1
    },
    "arguments": ["thi$", "pagesList"],
    "auto": true,
    "injectcode": false,
    "id": "scrap_260e49fc-167f-7a86-5d0f-3058c79d9eaa",
    "$type": "js",
    "numCommands": 3,
    "pkgName": "enyo-test.Carousel.enyoNext"
  }
}, 'scrap');
_cat.core.define("enyo-test.Carousel.enyoNext$$cat", function(thi$, pagesList) {

  var pkgName = "enyo-test.Carousel.enyoNext$$cat",
    _argsrefs = arguments,
    _argsnames = "thi$,pagesList",
    _args = {},
    _ipkg = _cat.core.getVar(pkgName),
    _counter = 0;

  if (_args) {
    _argsnames = _argsnames.split(",");
    _argsnames.forEach(function(arg) {
      _args[arg] = _argsrefs[_counter];
      _counter++;
    });
  }

  /* test content in here */
  _cat.core.clientmanager.delayManager(["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'enyoNext', desc: 'next(pagesList)',tips: ''});"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.core.plugin(\"enyo\").actions.next(pagesList);"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.utils.chai.assert(context);"], {
    'code': ["assert", "ok(true,\"Fake test\")\n"].join("."),
    'fail': true,
    scrap: _ipkg.scrap,
    args: _args
  });
});
_cat.core.declare('enyo-test.Carousel.letsGo$$cat', {
  scrap: {
    "name": ["letsGo"],
    "context": ["thi$", "btn"],
    "enyo": ["waterfall(btn, \"ontap\")"],
    "assert": ["ok(true, \"Fake test\")"],
    "file": "/home/arik/dev/projects/lastboy/catjs/test/enyo/cat-project/target/enyo-test/Carousel.js",
    "scrapinfo": {
      "start": {
        "line": 117,
        "col": 11
      },
      "end": {
        "line": 122,
        "col": 13
      }
    },
    "commentinfo": {
      "start": {
        "line": 116,
        "col": 8
      },
      "end": {
        "line": 124,
        "col": 11
      }
    },
    "single": {
      "name": true,
      "context": false,
      "enyo": false,
      "assert": false,
      "file": true,
      "scrapinfo": true,
      "commentinfo": true,
      "single": true,
      "singleton": true,
      "arguments": true,
      "auto": true,
      "injectcode": true,
      "id": true,
      "$type": true,
      "numCommands": true
    },
    "singleton": {
      "name": -1,
      "context": 1,
      "enyo": -1,
      "assert": -1,
      "file": -1,
      "scrapinfo": -1,
      "commentinfo": -1,
      "single": -1,
      "singleton": -1,
      "arguments": -1,
      "auto": -1,
      "injectcode": -1,
      "id": -1,
      "$type": -1,
      "numCommands": -1
    },
    "arguments": ["thi$", "btn"],
    "auto": true,
    "injectcode": false,
    "id": "scrap_02404993-547c-e247-7e15-1b24d90c14d2",
    "$type": "js",
    "numCommands": 3,
    "pkgName": "enyo-test.Carousel.letsGo"
  }
}, 'scrap');
_cat.core.define("enyo-test.Carousel.letsGo$$cat", function(thi$, btn) {

  var pkgName = "enyo-test.Carousel.letsGo$$cat",
    _argsrefs = arguments,
    _argsnames = "thi$,btn",
    _args = {},
    _ipkg = _cat.core.getVar(pkgName),
    _counter = 0;

  if (_args) {
    _argsnames = _argsnames.split(",");
    _argsnames.forEach(function(arg) {
      _args[arg] = _argsrefs[_counter];
      _counter++;
    });
  }

  /* test content in here */
  _cat.core.clientmanager.delayManager(["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'letsGo', desc: 'waterfall(btn, \"ontap\")',tips: ''});"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.core.plugin(\"enyo\").actions.waterfall(btn, \"ontap\");"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.utils.chai.assert(context);"], {
    'code': ["assert", "ok(true,\"Fake test\")\n"].join("."),
    'fail': true,
    scrap: _ipkg.scrap,
    args: _args
  });
});
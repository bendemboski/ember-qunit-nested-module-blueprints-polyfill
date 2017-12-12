'use strict';

const blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
const setupTestHooks = blueprintHelpers.setupTestHooks;
const emberNew = blueprintHelpers.emberNew;
const emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;
const modifyPackages = blueprintHelpers.modifyPackages;

const chai = require('ember-cli-blueprint-test-helpers/chai');
const expect = chai.expect;

const fixture = require('../helpers/fixture');

describe('Blueprint: mixin-test', function() {
  setupTestHooks(this);

  describe('in app', function() {
    beforeEach(function() {
      return emberNew();
    });

    describe('with ember-qunit-nested-module-blueprints-polyfill', function() {

      it('mixin-test foo', function() {
        return emberGenerateDestroy(['mixin-test', 'foo'], _file => {
          expect(_file('tests/unit/mixins/foo-test.js'))
          .to.equal(fixture('mixin-test/rfc232.js'));
        });
      });
    });
  });

});

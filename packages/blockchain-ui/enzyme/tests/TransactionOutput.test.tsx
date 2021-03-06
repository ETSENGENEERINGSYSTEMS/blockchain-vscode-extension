// tslint:disable no-unused-expression
import React from 'react';
import renderer from 'react-test-renderer';
import TransactionOutput from '../../src/components/TransactionOutput/TransactionOutput';
import chai from 'chai';
import sinonChai from 'sinon-chai';
chai.should();
chai.use(sinonChai);

describe('TransactionOutput component', () => {
    it('should render the expected snapshot', async () => {
        const component: any = renderer
            .create(<TransactionOutput output='some output'/>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});

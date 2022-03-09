import React from 'react';
import Step1 from './Step1';
import Txt1 from './Txt1';
import Step2 from './Step2';
import Txt2 from './Txt2';
import Step3 from './Step3';
import Txt3 from './Txt3';
import Step4 from './Step4';
import Txt4 from './Txt4';
import BreadcrumBnt from './Breadcrum';
import FlatBtn from './FlatBtn';
import PaymentBtn from './PaymentBtn';
import Head from 'next/head'

class MasterForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            frequency: 'en gang',
            amount: '300',
            deduction: 'nei',
            birthdate: '',
            paymentType: 'vipps',
            telephone: '',
            name: '',
            address: '',
            zip: '',
            city: '',
            email: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault()
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 3 ? 4 : currentStep + 1
        this.setState({ currentStep: currentStep })
    }

    Inputs() {
        let currentStep = this.state.currentStep;
        let deduction = this.state.deduction;

        if (currentStep === 2) {
            if (deduction === 'ja') {
                return (
                    <div className='txt-input-wrapper'>
                        <p>For å gi deg skattefradrag trenger vi fødselsdatoen din</p>
                        <label htmlFor='birthdate'>Fødselsdato</label>
                        <input id='birthdate' name='birthdate' type='date' value={this.state.birthdate} onChange={this.handleChange} min='1900-01-01' max='2005-12-31' required />
                    </div>
                )
            }
        }
    }

    Buttons() {
        let currentStep = this.state.currentStep;
        let frequency = this.state.frequency;
        let paymentType = this.state.paymentType;

        if (currentStep === 1) { return <FlatBtn type='button' value='neste' direction='right' click={this._next} /> }
        if (currentStep === 2) {
            if (frequency === 'en gang') {
                return (
                    <>
                        <fieldset className='payment'>
                            <legend className='sr-only'>Velg Betalingsform</legend>
                            <PaymentBtn handleChange={this.handleChange} paymentType={this.state.paymentType} value='vipps' />
                            <PaymentBtn handleChange={this.handleChange} paymentType={this.state.paymentType} value='kort' />
                        </fieldset>
                        <FlatBtn type='button' value='tilbake' direction='left' click={this._prev} />
                        <FlatBtn type='submit' value='neste' direction='right' />
                    </>
                )
            }
            if (frequency === 'månedlig') {
                return (
                    <>
                        <fieldset className='payment'>
                            <legend className='sr-only'>Velg Betalingsform</legend>
                            <PaymentBtn handleChange={this.handleChange} paymentType={this.state.paymentType} value='vipps' />
                            <PaymentBtn handleChange={this.handleChange} paymentType={this.state.paymentType} value='avtale-giro' />
                        </fieldset>
                        <FlatBtn type='button' value='tilbake' direction='left' click={this._prev} />
                        <FlatBtn type='submit' value='neste' direction='right' />
                    </>
                )
            }
        }

        if (currentStep === 3) {
            if (paymentType === 'vipps') {
                return <button form='masterform' className='vipps-approve' type='submit' value='Neste'>Neste</button>
            }
            return (
                <>
                    <FlatBtn type='button' value='tilbake' direction='left' click={this._prev} />
                    <button form='masterform' type='submit' className='flat-btn float-right'>Send inn</button>
                </>
            )
        }
    }

    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        this.setState({ currentStep: currentStep })
    }
    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({ currentStep: currentStep })
    }

    render() {
        return (
            <>
                <Head>
                    <title>Form</title>
                </Head>

                <div className='masterform-wrapper'>
                    <div className='txt-panel'>
                        <Txt1 currentStep={this.state.currentStep} />
                        <Txt2 currentStep={this.state.currentStep} />
                        <Txt3 currentStep={this.state.currentStep} paymentType={this.state.paymentType} />
                        <Txt4 currentStep={this.state.currentStep} name={this.state.name} address={this.state.address} zip={this.state.zip} city={this.state.city} telephone={this.state.telephone} email={this.state.email} frequency={this.state.frequency} amount={this.state.amount} deduction={this.state.deduction} />
                    </div>
                    <form id='masterform' className={'masterform active' + this.state.currentStep} onSubmit={this.handleSubmit}>
                        <a href="#" className="close">&times;</a>
                        <div className={'breadcrum activePage__' + this.state.currentStep}>
                            <BreadcrumBnt currentStep={this.state.currentStep} nr='1' click={() => this.setState({ currentStep: 1 })} value='gå direkte til valg av frekvens og beløp' icon='fas fa-hand-holding-usd' />
                            <BreadcrumBnt currentStep={this.state.currentStep} nr='2' click={() => this.setState({ currentStep: 2 })} value='gå direkte til betalingsvalg' icon='fas fa-credit-card' />
                            <BreadcrumBnt currentStep={this.state.currentStep} nr='3' click={() => this.setState({ currentStep: 3 })} value='gå direkte til personalia' icon='fas fa-user' />
                        </div>
                        <Step1 currentStep={this.state.currentStep} handleChange={this.handleChange} frequency={this.state.frequency} amount={this.state.amount} />
                        <Step2 currentStep={this.state.currentStep} handleChange={this.handleChange} deduction={this.state.deduction} birthdate={this.state.birthdate} />
                        <Step3 currentStep={this.state.currentStep} handleChange={this.handleChange} paymentType={this.state.paymentType} name={this.state.name} telephone={this.state.telephone} address={this.state.address} zip={this.state.zip} city={this.state.city} email={this.state.email} amount={this.state.amount} />
                        <Step4 currentStep={this.state.currentStep} />
                        {this.Inputs()}
                        {this.Buttons()}
                    </form>
                </div>
            </>
        );
    }
}

export default MasterForm
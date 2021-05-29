import React from 'react';
import './ContactForm.css'
import { useTranslation } from 'react-i18next';

function ContactForm({
  services,
  offices
}) {

	const { t } = useTranslation();

  const TextField = ({fieldName, fieldId}) => {
    return (
      <div className="form-group row mb-3">
        <label className="col-md-3 control-label">{fieldName}</label>
        <div className="col-md-9">
          <input id={fieldId} name={fieldId} type="text" placeholder={fieldName + " của bạn"} className="form-control"/>
        </div>
      </div>
    );
  };

  const SelectField = ({fieldName, fieldId, list}) => {
    return (
      <div className="form-group row mb-3">
        <label className="col-md-3 control-label">{fieldName}</label>
        <div className="col-md-9">
          <select className="form-select" aria-label={fieldName}>
            <option selected>Chọn {fieldName}</option>
            {Array.isArray(list) && list.map((option) => <option value="">{option}</option>)}
          </select>
        </div>
      </div>
    );
  };

  return (
    <>
      <div id="contact-form" className="e-home-contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
            <div className="card">
              <form className="form" action="https://formspree.io/duong.tracer@gmail.com" method="post">
              <fieldset>
                <legend className="text-center mb-3">{t('contactUs')}</legend>
                <TextField   fieldName={t('name')}     fieldId="name"  />
                <TextField   fieldName={t('phone')}    fieldId="phone" />
                <SelectField fieldName={t('province')} fieldId="province" list={[]} />
                <SelectField fieldName={t('branch')}   fieldId="branch"   list={offices} />
                <SelectField fieldName={t('services')} fieldId="service"  list={services} />
                
                <div className="form-group row mb-3">
                  <button type="submit" className="btn btn-primary">Gửi yêu cầu</button>
                </div>
              </fieldset>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm

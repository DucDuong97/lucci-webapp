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
      <div class="form-group row mb-3">
        <label class="col-md-3 control-label" for="name">{fieldName}</label>
        <div class="col-md-9">
          <input id={fieldId} name={fieldId} type="text" placeholder={fieldName + " của bạn"} class="form-control"/>
        </div>
      </div>
    );
  }

  const SelectField = ({fieldName, fieldId, list}) => {
    return (
      <div class="form-group row mb-3">
        <label class="col-md-3 control-label" for={fieldId}>{fieldName}</label>
        <div class="col-md-9">
          <select class="form-select" aria-label={fieldName}>
            <option selected>Chọn {fieldName}</option>
            {Array.isArray(list) && list.map((option) => <option value="">{option}</option>)}
          </select>
        </div>
      </div>
    );
  }

  return (
    <>
      <div id="contact-form" class="e-home-contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12">
            <div class="card">
              <form class="form" action="https://formspree.io/duong.tracer@gmail.com" method="post">
              <fieldset>
                <legend class="text-center mb-3">{t('contactUs')}</legend>
                <TextField   fieldName={t('name')}     fieldId="name"  />
                <TextField   fieldName={t('phone')}    fieldId="phone" />
                <SelectField fieldName={t('province')} fieldId="province" list={[]} />
                <SelectField fieldName={t('branch')}   fieldId="branch"   list={offices} />
                <SelectField fieldName={t('services')} fieldId="service"  list={services} />
                
                <div class="form-group row mb-3">
                  <button type="submit" class="btn btn-primary">Gửi yêu cầu</button>
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

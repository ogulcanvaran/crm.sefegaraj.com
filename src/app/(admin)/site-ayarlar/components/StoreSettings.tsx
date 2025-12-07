import ChoicesFormInput from '@/components/form/ChoicesFormInput'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap'

const StoreSettings = () => {
  return (
    <Row>
      <Col lg={12}>
        <Card>
          <CardHeader>
            <CardTitle as={'h4'} className="d-flex align-items-center gap-1">
              <IconifyIcon icon="solar:shop-2-bold-duotone" className="text-primary fs-20" />
              Mağaza Ayarları
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg={6}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="store-name" className="form-label">
                      Mağaza Adı
                    </label>
                    <input type="text" id="store-name" className="form-control" placeholder="İsim girin" />
                  </div>
                </form>
              </Col>
              <Col lg={6}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="owner-name" className="form-label">
                      Mağaza Sahibi Tam Adı
                    </label>
                    <input type="text" id="owner-name" className="form-control" placeholder="Tam ad" />
                  </div>
                </form>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <label htmlFor="schedule-number" className="form-label">
                    Sahip Telefon Numarası
                  </label>
                  <input type="number" id="schedule-number" name="schedule-number" className="form-control" placeholder="Numara" />
                </div>
              </Col>
              <Col lg={6}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="schedule-email" className="form-label">
                      Sahip E-posta
                    </label>
                    <input type="email" id="schedule-email" name="schedule-email" className="form-control" placeholder="Email" />
                  </div>
                </form>
              </Col>
              <Col lg={6}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="company-owner" className="form-label">
                      Şirket Sahibi
                    </label>
                    <input type="text" id="company-owner" className="form-control" placeholder="Şirket sahibi adı" />
                  </div>
                </form>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <label htmlFor="store-phone" className="form-label">
                    Telefon Numarası
                  </label>
                  <input type="tel" id="store-phone" className="form-control" placeholder="+90 (5XX) XXX XX XX" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <label htmlFor="whatsapp" className="form-label">
                    Whatsapp
                  </label>
                  <input type="tel" id="whatsapp" className="form-control" placeholder="+90 (5XX) XXX XX XX" />
                </div>
              </Col>
              <Col lg={12}>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Tam Adres
                  </label>
                  <textarea className="form-control bg-light-subtle" id="address" rows={3} placeholder="Adres yazın" defaultValue={''} />
                </div>
              </Col>
              <Col lg={4}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="your-zipcode" className="form-label">
                      Posta Kodu
                    </label>
                    <input type="number" id="your-zipcode" className="form-control" placeholder="posta kodu" />
                  </div>
                </form>
              </Col>
              <Col lg={4}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="choices-city" className="form-label">
                      Şehir
                    </label>
                    <ChoicesFormInput className="form-control" id="choices-city" data-choices data-choices-groups data-placeholder="Şehir Seçin">
                      <option>Bir şehir seçin</option>
                      <optgroup label="UK">
                        <option value="London">London</option>
                        <option value="Manchester">Manchester</option>
                        <option value="Liverpool">Liverpool</option>
                      </optgroup>
                      <optgroup label="FR">
                        <option value="Paris">Paris</option>
                        <option value="Lyon">Lyon</option>
                        <option value="Marseille">Marseille</option>
                      </optgroup>
                      <optgroup label="DE" disabled>
                        <option value="Hamburg">Hamburg</option>
                        <option value="Munich">Munich</option>
                        <option value="Berlin">Berlin</option>
                      </optgroup>
                      <optgroup label="US">
                        <option value="New York">New York</option>
                        <option value="Washington" disabled>
                          Washington
                        </option>
                        <option value="Michigan">Michigan</option>
                      </optgroup>
                      <optgroup label="SP">
                        <option value="Madrid">Madrid</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Malaga">Malaga</option>
                      </optgroup>
                      <optgroup label="CA">
                        <option value="Montreal">Montreal</option>
                        <option value="Toronto">Toronto</option>
                        <option value="Vancouver">Vancouver</option>
                      </optgroup>
                    </ChoicesFormInput>
                  </div>
                </form>
              </Col>
              <Col lg={4}>
                <form>
                  <label htmlFor="choices-country" className="form-label">
                    Ülke
                  </label>
                  <ChoicesFormInput className="form-control" id="choices-country" data-choices data-choices-groups data-placeholder="Ülke Seçin">
                    <option>Bir ülke seçin</option>
                    <optgroup>
                      <option>United Kingdom</option>
                      <option value="Fran">France</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="U.S.A">U.S.A</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="India">India</option>
                      <option value="Germany">Germany</option>
                      <option value="Spain">Spain</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                    </optgroup>
                  </ChoicesFormInput>
                </form>
              </Col>

              {/* Vergi ve Ticaret Bilgileri */}
              <Col lg={6}>
                <div className="mb-3">
                  <label htmlFor="tax-number" className="form-label">
                    Vergi Numarası
                  </label>
                  <input type="text" id="tax-number" className="form-control" placeholder="Vergi numarası" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <label htmlFor="trade-registry" className="form-label">
                    Ticaret Sicil No
                  </label>
                  <input type="text" id="trade-registry" className="form-control" placeholder="Ticaret sicil numarası" />
                </div>
              </Col>

              {/* Banka Bilgileri */}
              <Col lg={12}>
                <h5 className="mb-3 mt-2">Banka Bilgileri</h5>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <label htmlFor="bank-name" className="form-label">
                    Banka Adı
                  </label>
                  <input type="text" id="bank-name" className="form-control" placeholder="Banka adı" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <label htmlFor="iban" className="form-label">
                    IBAN
                  </label>
                  <input type="text" id="iban" className="form-control" placeholder="TR00 0000 0000 0000 0000 0000 00" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <label htmlFor="account-holder" className="form-label">
                    Hesap Sahibi
                  </label>
                  <input type="text" id="account-holder" className="form-control" placeholder="Hesap sahibi adı" />
                </div>
              </Col>

              {/* Sosyal Medya Bağlantıları */}
              <Col lg={12}>
                <h5 className="mb-3 mt-2">Sosyal Medya Bağlantıları</h5>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <label htmlFor="facebook" className="form-label">
                    <IconifyIcon icon="bxl:facebook" className="me-1" />
                    Facebook
                  </label>
                  <input type="url" id="facebook" className="form-control" placeholder="https://facebook.com/..." />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <label htmlFor="instagram" className="form-label">
                    <IconifyIcon icon="bxl:instagram" className="me-1" />
                    Instagram
                  </label>
                  <input type="url" id="instagram" className="form-control" placeholder="https://instagram.com/..." />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <label htmlFor="twitter" className="form-label">
                    <IconifyIcon icon="bxl:twitter" className="me-1" />
                    Twitter (X)
                  </label>
                  <input type="url" id="twitter" className="form-control" placeholder="https://twitter.com/..." />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <label htmlFor="linkedin" className="form-label">
                    <IconifyIcon icon="bxl:linkedin" className="me-1" />
                    LinkedIn
                  </label>
                  <input type="url" id="linkedin" className="form-control" placeholder="https://linkedin.com/..." />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <label htmlFor="youtube" className="form-label">
                    <IconifyIcon icon="bxl:youtube" className="me-1" />
                    YouTube
                  </label>
                  <input type="url" id="youtube" className="form-control" placeholder="https://youtube.com/..." />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <label htmlFor="tiktok" className="form-label">
                    <IconifyIcon icon="bxl:tiktok" className="me-1" />
                    TikTok
                  </label>
                  <input type="url" id="tiktok" className="form-control" placeholder="https://tiktok.com/..." />
                </div>
              </Col>

              {/* Çalışma Saatleri */}
              <Col lg={12}>
                <h5 className="mb-3 mt-2">Çalışma Saatleri</h5>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <label htmlFor="weekday-hours" className="form-label">
                    Hafta İçi
                  </label>
                  <input type="text" id="weekday-hours" className="form-control" placeholder="Örn: 09:00 - 18:00" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <label htmlFor="weekend-hours" className="form-label">
                    Hafta Sonu
                  </label>
                  <input type="text" id="weekend-hours" className="form-control" placeholder="Örn: 10:00 - 17:00" />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default StoreSettings

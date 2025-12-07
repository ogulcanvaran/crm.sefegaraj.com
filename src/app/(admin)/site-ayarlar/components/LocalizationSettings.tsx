import ChoicesFormInput from '@/components/form/ChoicesFormInput'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap'

const LocalizationSettings = () => {
  return (
    <Row>
      <Col lg={12}>
        <Card>
          <CardHeader>
            <CardTitle as={'h4'} className="d-flex align-items-center gap-1">
              <IconifyIcon icon="solar:compass-bold-duotone" className="text-primary fs-20" />
              Yerelleştirme Ayarları
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg={6}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="choices-country1" className="form-label">
                      Ülke
                    </label>
                    <ChoicesFormInput
                      className="form-control"
                      id="choices-country1"
                      data-choices
                      data-choices-groups
                      data-placeholder="Ülke Seçin">
                      <option>Bir ülke seçin</option>
                      <optgroup>
                        <option value="Turkey">Türkiye</option>
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
                  </div>
                </form>
              </Col>
              <Col lg={6}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="choices-language" className="form-label">
                      Dil
                    </label>
                    <ChoicesFormInput
                      className="form-control"
                      id="choices-language"
                      data-choices
                      data-choices-groups
                      data-placeholder="Dil Seçin">
                      <option>İngilizce</option>
                      <optgroup>
                        <option>Rusça</option>
                        <option value="Arabic">Arapça</option>
                        <option value="Spanish">İspanyolca</option>
                        <option value="Turkish">Türkçe</option>
                        <option value="German">Almanca</option>
                        <option value="Armenian">Ermenice</option>
                        <option value="Italian">İtalyanca</option>
                        <option value="Catalán">Katalanca</option>
                        <option value="Hindi">Hintçe</option>
                        <option value="Japanese">Japonca</option>
                        <option value="French">Fransızca</option>
                      </optgroup>
                    </ChoicesFormInput>
                  </div>
                </form>
              </Col>
              <Col lg={6}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="choices-currency" className="form-label">
                      Para Birimi
                    </label>
                    <ChoicesFormInput
                      className="form-control"
                      id="choices-currency"
                      data-choices
                      data-choices-groups
                      data-placeholder="Para Birimi Seçin">
                      <option>ABD Doları</option>
                      <optgroup>
                        <option value="Turkish Lira">Türk Lirası (₺)</option>
                        <option>Sterlin</option>
                        <option value="Indian Rupee">Hint Rupisi</option>
                        <option value="Euro">Euro (€)</option>
                        <option value="Australian Dollar">Avustralya Doları</option>
                        <option value="Japanese Yen">Japon Yeni</option>
                        <option value="Korean Won">Kore Wonu</option>
                      </optgroup>
                    </ChoicesFormInput>
                  </div>
                </form>
              </Col>
              <Col lg={6}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="choices-length" className="form-label">
                      Uzunluk Sınıfı
                    </label>
                    <ChoicesFormInput className="form-control" id="choices-length" data-choices data-choices-groups data-placeholder="Uzunluk Seçin">
                      <option>Santimetre</option>
                      <optgroup>
                        <option>Milimetre</option>
                        <option value="Inch">İnç</option>
                      </optgroup>
                    </ChoicesFormInput>
                  </div>
                </form>
              </Col>
              <Col lg={6}>
                <form>
                  <div>
                    <label htmlFor="choices-weight" className="form-label">
                      Ağırlık Sınıfı
                    </label>
                    <ChoicesFormInput className="form-control" id="choices-weight" data-choices data-choices-groups data-placeholder="Ağırlık Seçin">
                      <option>Kilogram</option>
                      <optgroup>
                        <option>Gram</option>
                        <option value="Pound">Libre</option>
                        <option value="Ounce">Ons</option>
                      </optgroup>
                    </ChoicesFormInput>
                  </div>
                </form>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default LocalizationSettings

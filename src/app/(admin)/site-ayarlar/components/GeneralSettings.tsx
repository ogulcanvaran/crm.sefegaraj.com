import ChoicesFormInput from '@/components/form/ChoicesFormInput'
import DropzoneFormInput from '@/components/form/DropzoneFormInput'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap'

const GeneralSettings = () => {
  return (
    <Row>
      <Col lg={12}>
        <Card>
          <CardHeader>
            <CardTitle as={'h4'} className="d-flex align-items-center gap-1">
              <IconifyIcon icon="solar:settings-bold-duotone" className="text-primary fs-20" />
              Genel Ayarlar
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg={6}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="meta-name" className="form-label">
                      Meta Başlık
                    </label>
                    <input type="text" id="meta-name" className="form-control" placeholder="Başlık" />
                  </div>
                </form>
              </Col>
              <Col lg={6}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="meta-tag" className="form-label">
                      Meta Etiket Anahtar Kelime
                    </label>
                    <input type="text" id="meta-tag" className="form-control" placeholder="Kelime girin" />
                  </div>
                </form>
              </Col>
              <Col lg={6}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="themes" className="form-label">
                      Mağaza Temaları
                    </label>
                    <ChoicesFormInput className="form-control" id="themes" data-choices data-choices-groups data-placeholder="Tema Seçin">
                      <option>Varsayılan</option>
                      <option value="Dark">Koyu</option>
                      <option value="Minimalist">Minimalist</option>
                      <option value="High Contrast">Yüksek Kontrast</option>
                    </ChoicesFormInput>
                  </div>
                </form>
              </Col>
              <Col lg={6}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="layout" className="form-label">
                      Düzen
                    </label>
                    <ChoicesFormInput className="form-control" id="layout" data-choices data-choices-groups data-placeholder="Düzen Seçin">
                      <option>Varsayılan</option>
                      <option value="Electronics">Elektronik</option>
                      <option value="Fashion">Moda</option>
                      <option value="Dining">Yemek</option>
                      <option value="Interior">İç Mekan</option>
                      <option value="Home">Ev</option>
                    </ChoicesFormInput>
                  </div>
                </form>
              </Col>

              {/* Logo ve Favicon Yükleme */}
              <Col lg={12}>
                <h5 className="mb-3 mt-2">Site Görselleri</h5>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <label className="form-label">Site Logosu</label>
                  <DropzoneFormInput
                    iconProps={{ icon: 'bx:image', height: 32, width: 32 }}
                    text="Logo yüklemek için tıklayın veya sürükleyin"
                    helpText={
                      <span className="text-muted fs-13">
                        Önerilen boyut: 200x60 px (PNG, JPG, SVG)
                      </span>
                    }
                    showPreview
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <label className="form-label">Favicon</label>
                  <DropzoneFormInput
                    iconProps={{ icon: 'bx:image', height: 32, width: 32 }}
                    text="Favicon yüklemek için tıklayın veya sürükleyin"
                    helpText={
                      <span className="text-muted fs-13">
                        Önerilen boyut: 32x32 px veya 64x64 px (ICO, PNG)
                      </span>
                    }
                    showPreview
                  />
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <label htmlFor="description" className="form-label">
                    Açıklama
                  </label>
                  <textarea className="form-control bg-light-subtle" id="description" rows={4} placeholder="Açıklama yazın" defaultValue={''} />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default GeneralSettings

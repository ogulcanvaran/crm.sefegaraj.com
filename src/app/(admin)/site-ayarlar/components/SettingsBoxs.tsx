import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap'

const SettingsBoxs = () => {
  return (
    <Row>
      <Col lg={3}>
        <Card>
          <CardHeader>
            <CardTitle as={'h4'} className="d-flex align-items-center gap-1">
              <IconifyIcon icon="solar:box-bold-duotone" className="text-primary fs-20" />
              Kategori Ayarları
            </CardTitle>
          </CardHeader>
          <CardBody>
            <p>Kategori Ürün Sayısı </p>
            <div className="d-flex gap-2 align-items-center mb-3">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Evet
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Hayır
                </label>
              </div>
            </div>
            <form>
              <div className="mb-1 pb-1">
                <label htmlFor="items-par-page" className="form-label">
                  Sayfa Başına Varsayılan Öğe Sayısı
                </label>
                <input type="number" id="items-par-page" className="form-control" placeholder={'000'} />
              </div>
            </form>
          </CardBody>
        </Card>
      </Col>
      <Col lg={3}>
        <Card>
          <CardHeader>
            <CardTitle as={'h4'} className="d-flex align-items-center gap-1">
              <IconifyIcon icon="solar:chat-square-check-bold-duotone" className="text-primary fs-20" />
              Değerlendirme Ayarları
            </CardTitle>
          </CardHeader>
          <CardBody>
            <p>Değerlendirmelere İzin Ver </p>
            <div className="d-flex gap-2 align-items-center mb-3">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault3" defaultChecked />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  Evet
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault4" />
                <label className="form-check-label" htmlFor="flexRadioDefault4">
                  Hayır
                </label>
              </div>
            </div>
            <p className="mt-3 pt-1">Misafir Değerlendirmelerine İzin Ver </p>
            <div className="d-flex gap-2 align-items-center mb-2">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault5" />
                <label className="form-check-label" htmlFor="flexRadioDefault5">
                  Evet
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault6" defaultChecked />
                <label className="form-check-label" htmlFor="flexRadioDefault6">
                  Hayır
                </label>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg={3}>
        <Card>
          <CardHeader>
            <CardTitle as={'h4'} className="d-flex align-items-center gap-1">
              <IconifyIcon icon="solar:ticket-bold-duotone" className="text-primary fs-20" />
              Kupon Ayarları
            </CardTitle>
          </CardHeader>
          <CardBody>
            <form>
              <div className="mb-3">
                <label htmlFor="min-vouchers" className="form-label">
                  Minimum Kupon
                </label>
                <input type="number" id="min-vouchers" className="form-control" placeholder={'000'} defaultValue={1} />
              </div>
            </form>
            <form>
              <div>
                <label htmlFor="mex-vouchers" className="form-label">
                  Maksimum Kupon
                </label>
                <input type="number" id="mex-vouchers" className="form-control" placeholder={'000'} defaultValue={12} />
              </div>
            </form>
          </CardBody>
        </Card>
      </Col>
      <Col lg={3}>
        <Card>
          <CardHeader>
            <CardTitle as={'h4'} className="d-flex align-items-center gap-1">
              <IconifyIcon icon="solar:ticket-sale-bold-duotone" className="text-primary fs-20" />
              Vergi Ayarları
            </CardTitle>
          </CardHeader>
          <CardBody>
            <p>Vergili Fiyatlar</p>
            <div className="d-flex gap-2 align-items-center mb-3">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault7" defaultChecked />
                <label className="form-check-label" htmlFor="flexRadioDefault7">
                  Evet
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault8" />
                <label className="form-check-label" htmlFor="flexRadioDefault8">
                  Hayır
                </label>
              </div>
            </div>
            <form>
              <div className="mb-1 pb-1">
                <label htmlFor="items-tax" className="form-label">
                  Varsayılan Vergi Oranı
                </label>
                <input type="text" id="items-tax" className="form-control" placeholder={'000'} defaultValue="18%" />
              </div>
            </form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default SettingsBoxs

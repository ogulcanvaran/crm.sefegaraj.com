import React from 'react'
import GeneralSettings from './components/GeneralSettings'
import StoreSettings from './components/StoreSettings'
import LocalizationSettings from './components/LocalizationSettings'
import SettingsBoxs from './components/SettingsBoxs'
import CustomersSettings from './components/CustomersSettings'
import PageTItle from '@/components/PageTItle'
import Link from 'next/link'

const SettingsPage = () => {
  return (
    <>
      <PageTItle title="SİTE AYARLARI" />
      <GeneralSettings />
      <StoreSettings />
      <LocalizationSettings />
      <SettingsBoxs />
      <CustomersSettings />
      <div className="text-end">
        <Link href="" className="btn btn-danger">
          İptal
        </Link>
        &nbsp;
        <Link href="" className="btn btn-success">
          Değişiklikleri Kaydet
        </Link>
      </div>
    </>
  )
}

export default SettingsPage

export default function Footer() {
  return (
    <footer className='bg-black text-white py-6 flex flex-col items-center gap-4'>
      <div className='flex gap-6'>
        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
          <img src='/icons/facebook.svg' alt='Facebook' className='w-6 h-6' />
        </a>
        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
          <img src='/icons/instagram.svg' alt='Instagram' className='w-6 h-6' />
        </a>
        <a href='https://maps.google.com/?q=Multiservicios+Veracruz' target='_blank' rel='noopener noreferrer'>
          <img src='/icons/location.svg' alt='Ubicación' className='w-6 h-6' />
        </a>
      </div>
      <p className='text-sm text-gray-400'>© 2025 Multiservicios e Iluminación Veracruz</p>
    </footer>
  )
}

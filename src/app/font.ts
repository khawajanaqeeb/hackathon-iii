import { Inter, Roboto_Mono, Poppins } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add the weights you need
  style: ['normal', 'italic'], // Optional: Include styles if needed
  display: 'swap', // Improves loading behavior
});
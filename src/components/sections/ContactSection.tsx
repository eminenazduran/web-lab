import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            İletişim
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Yeni bir proje fikriniz mi var veya sadece merhaba mı demek istiyorsunuz? Aşağıdaki formu doldurarak ulaşabilirsiniz.
          </p>
        </div>
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

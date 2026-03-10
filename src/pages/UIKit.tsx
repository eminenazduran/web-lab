import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

export default function UIKit() {
    return (
        <div className="bg-white dark:bg-gray-950 p-8 space-y-12 border-t-4 border-dashed border-gray-300 dark:border-gray-800 mt-20">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                UI Kit
            </h1>

            {/* --- BUTTONS --- */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold border-b pb-2 text-gray-800 dark:text-gray-200 dark:border-gray-800">Buttons</h2>
                {/* Varyant 1: Primary */}
                <div className="flex flex-wrap gap-3">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="ghost">Ghost</Button>
                </div>
                {/* Varyant 2: Boyutlar */}
                <div className="flex flex-wrap items-end gap-3 mt-4">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                </div>
                {/* Varyant 3: Disabled */}
                <div className="flex flex-wrap gap-4 mt-4">
                    <Button variant="primary" disabled className="opacity-50 cursor-not-allowed">
                        Disabled
                    </Button>
                </div>
            </section>

            {/* --- INPUTS --- */}
            <section className="space-y-4 max-w-md">
                <h2 className="text-2xl font-semibold border-b pb-2 text-gray-800 dark:text-gray-200 dark:border-gray-800">Inputs</h2>
                {/* Varyant 4: Normal */}
                <Input id="ui-name" label="Normal Input" placeholder="Bir seyler yazin..." />
                {/* Varyant 5: Hatali */}
                <Input id="ui-err" label="Hatali Input" error="Bu alan zorunludur" />
                {/* Varyant 6: Help text */}
                <Input id="ui-help" label="Help Text" type="email" helpText="E-posta adresinizi girin" />
                {/* Varyant 7: Disabled */}
                <Input id="ui-dis" label="Disabled" disabled value="Duzenlenemez" />
            </section>

            {/* --- CARDS --- */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold border-b pb-2 text-gray-800 dark:text-gray-200 dark:border-gray-800">Cards</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Varyant 8: Elevated */}
                    <Card variant="elevated" title="Elevated Card">
                        Golge ile yukseltiilmis kart.
                    </Card>
                    {/* Varyant 9: Outlined */}
                    <Card variant="outlined" title="Outlined Card">
                        Cerceveli kart.
                    </Card>
                    {/* Varyant 10: Filled */}
                    <Card variant="filled" title="Filled Card" footer={<Button size="sm">Detay</Button>}>
                        Dolgulu arka plan.
                    </Card>
                </div>
            </section>

            {/* --- ALERTS --- */}
            <section className="space-y-4 max-w-xl">
                <h2 className="text-2xl font-semibold border-b pb-2 text-gray-800 dark:text-gray-200 dark:border-gray-800">Alerts</h2>
                {/* Varyant 11: Info */}
                <Alert variant="info" title="Bilgi">Bilgilendirme mesaji.</Alert>
                {/* Varyant 12: Success */}
                <Alert variant="success" title="Basarili">Islem tamamlandi.</Alert>
                {/* Varyant 13: Warning */}
                <Alert variant="warning" title="Uyari">Dikkat edilmesi gereken durum.</Alert>
                {/* Varyant 14: Error */}
                <Alert variant="error" title="Hata" dismissible>Bir hata olustu.</Alert>
            </section>
        </div>
    );
}

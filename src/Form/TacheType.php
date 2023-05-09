<?php

namespace App\Form;

use App\Entity\Tache;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TacheType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class, [
                'label' => false,
                'required' => true,
                'attr' => [
                    'placeholder' => 'Je dois faire...',
                ],
            ])
            ->add('priority', ChoiceType::class, [
                'label' => false,
                'placeholder' => 'Urgence de la tâche',
                'required' => true,
                'choices' => [
                    '🔴  Très Urgent' => '🔴  Très Urgent',
                    '🟠  Urgent' => '🟠  Urgent',
                    '🟡  Peu Urgent' => '🟡  Peu Urgent',
                    '🟢  Pas Urgent' => '🟢  Pas Urgent',
                ],
            ])
            ->add('checked', HiddenType::class, [
                'required' => false,
                'data' => '0',
            ])
            ->add('date', DateType::class, [
                'required' => true,
                'label' => '🗓️',
                'widget' => 'single_text',
                'attr' => ['class' => 'js-datepicker'],
                'html5' => false,
                'format' => 'dd/MM/yyyy',
                'data' => new \DateTime('now'),
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Tache::class,
        ]);
    }
}

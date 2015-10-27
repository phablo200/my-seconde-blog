
from django import forms
from .models import SignUp

class SignUpForm(forms.ModelForm):
	password = forms.CharField(widget=forms.PasswordInput())
	class Meta:
		model=SignUp
		fields=['email', 'full_name', 'password']

	def clean_email(self):
		email=self.cleaned_data.get('email')
		email_base, provider=email.split('@')
		domain, extension=provider.split('.')
		if not extension=='com':
			raise forms.ValidationError('Por Favor inserir Email Correto')
		return email
	def clean_full_name(self):
		#formatar depois
		full_name=self.cleaned_data.get('full_name')
		return full_name
	def __str__(self):
		return str(password)	
package co.edu.cesde;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity implements View.OnClickListener{

    private EditText etEmail, etPassword;
    private Button btnSing, btnSingIn;
    private TextView tvForgotPassword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        etEmail = findViewById(R.id.etEmail);
        etPassword = findViewById(R.id.etPassword);
        btnSing = findViewById(R.id.btnSing);
        btnSingIn = findViewById(R.id.btnSingIn);
        tvForgotPassword = findViewById(R.id.tvForgotPassword);
        btnSingIn.setOnClickListener(this);
        btnSing.setOnClickListener(this);
    }
    public void showMessage(){
        Toast.makeText(this, "Hola Mundo", Toast.LENGTH_SHORT).show();
    }
    public void goToRegister(){
        Intent intent = new Intent (packageContext.MainActivity.this,RegisterActivity.class);
        startActivity(intent);
    }

    @Override
    public void onClick(View view) {
        switch (view.getId()){
            case  R.id.btnSingIn:
                showMessage();
                break;
            case R.id.btnSing:
                goToRegister();
                break;
        }
    }
}